import { Component, OnInit } from '@angular/core';
import { PetsService } from '../Services/pets.service';
import { LoaderService } from '../Services/loader.service';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DetailsPetComponent } from '../details-pet/details-pet.component';
import { UserService } from '../Services/user.service';
import { ServService } from '../Services/serv.service';
import { Services } from '../Services/api.schema';
import { DetailsServPage } from '../details-serv/details-serv.page';


@Component({
  selector: 'app-viewserv',
  templateUrl: './viewserv.page.html',
  styleUrls: ['./viewserv.page.scss'],
})
export class ViewservPage implements OnInit {

  serv$: Observable<Services[]>

  constructor(
    private servService: ServService, 
    private ionLoader: LoaderService,
    public modalCtrl: ModalController,
    public userId: UserService,
  ) { }

  async ngOnInit() {
    const loading = await this.ionLoader.showLoader;
    
    this.serv$ = this.servService.getServices({user_id:this.userId.id}).pipe(
      tap((serv) => {
        console.log(serv);
        return serv;
      })
    );
  }

  async openDetailModal(serv:Services){
    const modal = await this.modalCtrl.create({
      component: DetailsServPage , //DetailsServPage
      componentProps: { serv },
    });
    await modal.present();

    const {data: updateServ, role} = await modal.onDidDismiss();
    if (updateServ && role === 'edit') {
      this.serv$ = this.serv$.pipe(
        map((serv) => {
          serv.forEach((Serv) => {
            if(Serv.id === updateServ.id){
              Serv = updateServ;
            }
            return Serv;
          });
          return serv;
        })
      );
    }

    if (role === 'delete'){
      this.serv$ = this.serv$.pipe(
        map((serv) => {
          serv.filter((Serv) => Serv.id  !== updateServ.id);
          return serv;
        })
      );
    }
  }
}
