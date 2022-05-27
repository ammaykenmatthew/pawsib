import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SigninPage } from '../signin/signin.page';
import { SignupPage } from '../signup/signup.page';
import { Signin2Page } from '../signin2/signin2.page';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    private route: Router,
  ) { }

  ngOnInit() {
  }

  async signin() {
    const modal = await this.modalCtrl.create({
      component:SigninPage,
      breakpoints: [0, 0.3, 0.5,],  //0.8
      initialBreakpoint: 0.5,
      cssClass: 'signin-modal',
    })
    return await modal.present();
  }
  register(){
    this.route.navigate(['/signup']);
  }


  async signinAsService() {
    const modal = await this.modalCtrl.create({
      component:Signin2Page, //SigninPage2
      breakpoints: [0, 0.3, 0.5,],  //0.8
      initialBreakpoint: 0.5,
      cssClass: 'signin2-modal', //signin2-modal
    })
    return await modal.present();
  }
  registerAsService(){
    this.route.navigate(['/signup2']); //signup-2
  }
}


