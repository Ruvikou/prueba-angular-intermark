import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public userName: string | null = '';
  public user?: User;
  public hasError: boolean = false;
  public errors: string[] = [];

  constructor(private _route: ActivatedRoute, private apiService: ApiService) {
    try {
      this.userName = this._route.snapshot.paramMap.get('name');

      this.apiService.getUserData(this.userName || '').subscribe( data => {
        console.log(data);
        this.user = data;
      })
    } catch (error) {
      this.hasError = true;
      this.errors.push('Error al recuperar usuarios');
      this.errors.push(error+'');
    }
    // this.user = this.apiService.getUserData(this.userName || '');
  }

  ngOnInit(): void {
  }

  closeError($event: boolean) {
    this.hasError = $event;
    this.errors = [];
  }

}
