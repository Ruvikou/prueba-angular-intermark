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
    // Fetch user details by param in headers
    try {
      this.userName = this._route.snapshot.paramMap.get('name');

      this.apiService.getUserData(this.userName || '').subscribe( data => {
        this.user = data;
      })
    } catch (error) {
      // Executes error component
      this.hasError = true;
      this.errors.push('Error al recuperar usuarios');
      this.errors.push(error+'');
    }
  }

  ngOnInit(): void {
  }

  // Reset error component
  closeError($event: boolean) {
    this.hasError = $event;
    this.errors = [];
  }

}
