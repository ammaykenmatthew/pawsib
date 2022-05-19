import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { UserService } from '../Services/user.service';
import { AddpetPage } from '../addpet/addpet.page';
import { ViewpetPage } from '../viewpet/viewpet.page';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  apiResult: any;
  users: any;

  name: any; 
  email: any;
  number: any;
  role: any;
  place: any;

  constructor(
    private http: HttpClient,
    private _apiService: ApiService,
    public userName: UserService,
    public userEmail: UserService,
    public userNumber: UserService,
    private route: Router,
    public modalCtrl: ModalController,
  ) {}

  ngOnInit(){
    this.name = this.userName.name;
    this.email = this.userEmail.email;
    this.number = this.userNumber.number;
  }
  
  goToProfile(){
    this.route.navigate(['/profile']);
  }
  
  async addpet() {
    const modal = await this.modalCtrl.create({
      component:AddpetPage,
      breakpoints: [0, 0.3, 0.5,0.9], 
      initialBreakpoint: 0.9,
      cssClass: 'addpet-modal',
    })
    return await modal.present();
  }

  async viewpet() {
    const modal = await this.modalCtrl.create({
      component:ViewpetPage,
      breakpoints: [0, 0.3, 0.5,0.9], 
      initialBreakpoint: 0.9,
      cssClass: 'viewpet-modal',
    })
    return await modal.present();
  }
}
