import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.page.html',
  styleUrls: ['./join.page.scss'],
})
export class JoinPage implements OnInit {


  value_selected1: string;
  value_selected2:string;

  constructor(
    private route: Router,
    public userRole: UserService,
    public userPlace: UserService,
    private _apiService: ApiService, 
  ){
 
  }
  ngOnInit() {

  }
  welcome(){
    this.route.navigate(['/welcome']);
  }
  submitRole(){
    this._apiService.saveUserData(this.userRole)
    this.route.navigate(['/welcome2']);
  }

}

