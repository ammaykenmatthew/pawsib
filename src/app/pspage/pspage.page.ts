import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { PetsService } from '../Services/pets.service';
import { LoaderService } from '../Services/loader.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DetailsPetComponent } from '../details-pet/details-pet.component';
import { UserService } from '../Services/user.service';
import { ServService } from '../Services/serv.service';
import { Services } from '../Services/api.schema';

@Component({
  selector: 'app-pspage',
  templateUrl: './pspage.page.html',
  styleUrls: ['./pspage.page.scss'],
})
export class PspagePage implements OnInit {

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
    const loading = await this.ionLoader.showLoader;
    
    this.serv$ = this.servService.getAllServices(this.serv$).pipe(
      tap((serv) => {
        console.log(serv);
        return serv;
      })
    );
  }

 

  goToAll(){
    this.route.navigate(['/allserv']);
  }
  goToHome(){
    this.route.navigate(['/home']);
  }
}
