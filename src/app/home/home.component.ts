import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ApiService } from '../service/api.service';
import { FormControl, Validators } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faSearch = faSearch;
  public userName: FormControl;
  public users?: User[];
  public hasError: boolean = false;
  public errors: string[] = [];
  
  constructor(private apiService: ApiService) {
    this.userName = new FormControl('', [Validators.required, Validators.minLength(4)]);
  }

  ngOnInit(): void {
    
  }

  search() {
    if(this.userName && this.userName.valid && this.userName.value != 'pertierra') {
      try {
        this.apiService.getData(this.userName.value).subscribe( data => {
          this.users = data.items.sort(function(a, b){
            if (a.login.toUpperCase() > b.login.toUpperCase()) {
              return 1;
            }
            if (a.login.toUpperCase() < b.login.toUpperCase()) {
              return -1;
            }
        
            return 0;
          });
          
          if(this.users.length > 10) {
            this.users.length = 10;
          }
        })
      } catch (error) {
        this.hasError = true;
        this.errors.push('Error al recuperar usuarios');
        this.errors.push(error+'');
      }
    } else {
      this.hasError = true;
      if(this.userName.value == 'pertierra'){
        this.errors.push('El nombre no puede ser pertierra');
      }
      if(this.userName.value == ''){
        this.errors.push('Debe haber un nombre para buscar');
      } else if (this.userName.value.length < 4) {
        this.errors.push('El nombre debe tener más de 4 carácteres');
      }
    }
  }

  closeError($event: boolean) {
    this.hasError = $event;
    this.errors = [];
  }
}
