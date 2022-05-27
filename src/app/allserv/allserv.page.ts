import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { PetsService } from '../Services/pets.service';
import { LoaderService } from '../Services/loader.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DetailsServ2Page } from '../details-serv2/details-serv2.page';
import { UserService } from '../Services/user.service';
import { ServService } from '../Services/serv.service';
import { Services } from '../Services/api.schema';

@Component({
  selector: 'app-allserv',
  templateUrl: './allserv.page.html',
  styleUrls: ['./allserv.page.scss'],
})
export class AllservPage implements OnInit {

  serv$: Observable<Services[]>


  constructor(
    private route: Router,
    private http: HttpClient,
    public modalCtrl: ModalController,
    private servService: ServService, 
    private ionLoader: LoaderService,
    public userId: UserService,
  ) { }

 async ngOnInit() {
    await this.ionLoader.showLoader;
    
    this.serv$ = this.servService.getAllServices(this.serv$).pipe(
      tap((serv) => {
        console.log(serv);
        return serv;
      })
    );
  }

   async openDetailModal(serv: Services){
    const modal = await this.modalCtrl.create({
      component: DetailsServ2Page, //Change to DetailsServ-2
      componentProps: { serv },
    });
    await modal.present();
  }

  goToHome(){
    this.route.navigate(['/pspage']);
  }
}
