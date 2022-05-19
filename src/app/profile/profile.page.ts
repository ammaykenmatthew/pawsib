import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {UserService} from '../Services/user.service';
import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router';
import { LoaderService } from '../Services/loader.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  users: any;
  name: any; 
  email: any;
  number: any;

  constructor(
    private http: HttpClient,
    private _apiService: ApiService,
    public userName: UserService,
    public userEmail: UserService,
    public userNumber: UserService,
    private route: Router,
    private ionLoader: LoaderService,
  ) { }

  ngOnInit() {
    this.name = this.userName.name;
    this.email = this.userEmail.email;
    this.number = this.userNumber.number;
  }


  goToHome(){
    this.route.navigate(['/home'], {replaceUrl:true});
  }

  logout(){
    this._apiService.logout(this.users).subscribe((res)=>{
      console.log("SUCCESS", res);
        this.ionLoader.showLoader();
        this.route.navigate(['/login'], {replaceUrl:true});
    });
    // this.route.navigate(['/login'], {replaceUrl:true});
  }
}
