import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { UserService } from '../Services/user.service';
import { AddsrvcPage } from '../addsrvc/addsrvc.page';
import { ViewservPage } from '../viewserv/viewserv.page';
import { RequestSrv } from '../Services/api.schema';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RequestService } from '../Services/requestSrv.service';
import { ServService } from '../Services/serv.service';
import { DetailsReq1Page } from '../details-req1/details-req1.page';


@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  req$: Observable<RequestSrv[]>

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
    public requestSrv : RequestService,
    public servId: ServService, 
    public userId: UserService,

  ) { }

  async ngOnInit() {
    this.name = this.userName.name;
    this.email = this.userEmail.email;
    this.number = this.userNumber.number;

    this.req$ = this.requestSrv.getAllRequest(this.req$).pipe(        //getAllRequest(this.req$). - kuha lahat 
      tap((req) => {
        console.log(req);
        return req;
      })
    );
  }

  goToProfile2(){
    this.route.navigate(['/profile2']); //Profile2
  }

  async openDetailModal(req:RequestSrv){
    const modal = await this.modalCtrl.create({
      component: DetailsReq1Page , //DetailsRequest1
      componentProps: { req },
    });
    await modal.present();
  }


  async addservice() {
    const modal = await this.modalCtrl.create({
      component:AddsrvcPage,
      breakpoints: [0, 0.3, 0.5,0.9], 
      initialBreakpoint: 0.9,
      cssClass: 'addservice-modal',
    })
    return await modal.present();
  }

  async viewservice() {
    const modal = await this.modalCtrl.create({
      component:ViewservPage ,
      breakpoints: [0, 0.3, 0.5,0.9], 
      initialBreakpoint: 0.9,
      cssClass: 'viewservice-modal', 
    })
    return await modal.present();
  }
}
