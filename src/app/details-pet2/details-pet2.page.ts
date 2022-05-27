import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddpetPage } from '../addpet/addpet.page';
import { PetsService } from '../Services/pets.service';
import { Pets } from '../Services/pet.schema';
import { Users } from '../Services/pet.schema';
import { LoaderService } from '../Services/loader.service';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-details-pet2',
  templateUrl: './details-pet2.page.html',
  styleUrls: ['./details-pet2.page.scss'],
})
export class DetailsPet2Page implements OnInit {
  
  @Input() pet: Pets;

  constructor(
    public modalCtrl: ModalController,
    private petsService: PetsService,
    private ionLoader: LoaderService,
  ) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss(this.pet);
  }

  
}
