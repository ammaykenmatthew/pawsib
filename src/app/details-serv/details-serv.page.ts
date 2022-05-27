import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddpetPage } from '../addpet/addpet.page';
import { PetsService } from '../Services/pets.service';
import { ServService } from '../Services/serv.service';
import { Services } from '../Services/api.schema';
import { Pets } from '../Services/pet.schema';
import { Users } from '../Services/pet.schema';
import { LoaderService } from '../Services/loader.service';
import { take } from 'rxjs/operators';
import { AddsrvcPage } from '../addsrvc/addsrvc.page';

@Component({
  selector: 'app-details-serv',
  templateUrl: './details-serv.page.html',
  styleUrls: ['./details-serv.page.scss'],
})
export class DetailsServPage implements OnInit {
  @Input() serv: Services;


  constructor(
    public modalCtrl: ModalController,
    private servService: ServService,
    private ionLoader: LoaderService,
  ) { }

  ngOnInit() {
  }
  
  closeModal(role = 'edit'){
    this.modalCtrl.dismiss(this.serv, role);
  }

  async openEditModal(){
    const modal = await this.modalCtrl.create({
      component: AddsrvcPage,

      componentProps: { serv: this.serv},
    });
    await modal.present();

    const {data : updateServ} = await modal.onDidDismiss();
    if(updateServ) {
      this.serv = updateServ;
    }
  }

  async onDeleteServ(){
    const loading = await this.ionLoader.showLoader();


    this.servService
      .deleteServ(this.serv.id)
      .pipe(take(1))
      .subscribe(()=>{
      this.closeModal('delete');
    });
  }
}
