import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddpetPage } from '../addpet/addpet.page';
import { PetsService } from '../Services/pets.service';
import { Pets } from '../Services/pet.schema';
import { Users } from '../Services/pet.schema';
import { LoaderService } from '../Services/loader.service';
import { take } from 'rxjs/operators';
import { Services } from '../Services/api.schema';
import { Request1Page } from '../request1/request1.page';

@Component({
  selector: 'app-details-serv2',
  templateUrl: './details-serv2.page.html',
  styleUrls: ['./details-serv2.page.scss'],
})
export class DetailsServ2Page implements OnInit {

  @Input() serv: Services;

  constructor(
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  async goToRequest1() {
    const modal = await this.modalCtrl.create({
      component:Request1Page,
      breakpoints: [0, 0.3, 0.5,0.9], 
      initialBreakpoint: 0.9,
      cssClass: 'request1-modal',
    })
    return await modal.present();
  }
  closeModal(){
    this.modalCtrl.dismiss(this.serv);
  }
}
