import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../Services/api.service';
import { LoaderService } from '../Services/loader.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {  UserService} from '../Services/user.service';


@Component({
  selector: 'app-signin2',
  templateUrl: './signin2.page.html',
  styleUrls: ['./signin2.page.scss'],
})
export class Signin2Page implements OnInit {


  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  isSubmitted = false;
  email: any;
  password: any;
  user: any;
  number: any;
  id: any;
  //role
  //place

  constructor(
    public modalCtrl: ModalController,
    private route: Router,
    private http: HttpClient,
    private _apiService: ApiService, 
    private ionLoader: LoaderService,
    public formBuilder: FormBuilder,
    public userName: UserService,
    public userEmail: UserService,
    public userNumber: UserService,
    public userId: UserService,
  ) { }

  ngOnInit() {
  }

  showLoader() {
    this.ionLoader.showLoader();

    setTimeout(() => {
      this.hideLoader();
    }, 2000);
  }

  hideLoader() {
    this.ionLoader.hideLoader();
  }

  submitFormService(){
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      this._apiService.login(this.loginForm.value).subscribe((result:any)=>{
        this.userId.id = result.user.id;
        this.userName.name = result.user.name;
        this.userEmail.email = result.user.email;
        this.userNumber.number = result.user.number;
        console.log(result.user);
        console.log("SUCCESS", result);
        this.ionLoader.showLoader();
        this.route.navigate(['/home2']);
        this.modalCtrl.dismiss(); 
      }), (error: any)=> {
        console.log("Error", error);
      }
    } else  {
      if (!this.loginForm.valid) {
        console.log('Please provide all the required values!')
            return false;
      }
  }
}

signup2(){ //signup2
  this.route.navigate(['/signup2']);
}

async dismiss(){
  await this.modalCtrl.dismiss();
}

}
