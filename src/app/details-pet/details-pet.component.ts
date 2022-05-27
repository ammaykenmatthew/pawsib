import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddpetPage } from '../addpet/addpet.page';
import { PetsService } from '../Services/pets.service';
import { Pets } from '../Services/pet.schema';
import { Users } from '../Services/pet.schema';
import { LoaderService } from '../Services/loader.service';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-details-pet',
  templateUrl: './details-pet.component.html',
  styleUrls: ['./details-pet.component.scss'],
})
export class DetailsPetComponent implements OnInit {
  @Input() pet: Pets;

  @Input() user: Users;


  constructor(
    public modalCtrl: ModalController,
    private petsService: PetsService,
    private ionLoader: LoaderService,
  ) { }

  ngOnInit(
    
  ) {}

  closeModal(role = 'edit'){
    this.modalCtrl.dismiss(this.pet, role);
  }

  async openEditModal(){
    const modal = await this.modalCtrl.create({
      component: AddpetPage,

      componentProps: { pet: this.pet},
    });
    await modal.present();

    const {data : updatePets} = await modal.onDidDismiss();
    if(updatePets) {
      this.pet = updatePets;
    }
  }

  async onDeletePet(){
    const loading = await this.ionLoader.showLoader();


    this.petsService
      .deletePets(this.pet.id)
      .pipe(take(1))
      .subscribe(()=>{
      this.closeModal('delete');
    });
  }
}
