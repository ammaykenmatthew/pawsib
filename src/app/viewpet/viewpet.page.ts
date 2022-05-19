import { Component, OnInit } from '@angular/core';
import { PetsService } from '../Services/pets.service';
import { LoaderService } from '../Services/loader.service';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Pets } from '../Services/pet.schema';
import { DetailsPetComponent } from '../details-pet/details-pet.component';
import { UserService } from '../Services/user.service';


@Component({
  selector: 'app-viewpet',
  templateUrl: './viewpet.page.html',
  styleUrls: ['./viewpet.page.scss'],
})
export class ViewpetPage implements OnInit {

  pets$: Observable<Pets[]>


  constructor(
    private petsService: PetsService, 
    private ionLoader: LoaderService,
    public modalCtrl: ModalController,
    public userId: UserService,

  ) { }

  async ngOnInit() {
    const loading = await this.ionLoader.showLoader;
    
    this.pets$ = this.petsService.getPets({user_id:this.userId.id}).pipe(
      tap((pets) => {
        console.log(pets);
        return pets;
      })
    );
  }

  async openDetailModal(pet: Pets){
    const modal = await this.modalCtrl.create({
      component: DetailsPetComponent,
      componentProps: { pet },
    });
    await modal.present();

    const {data: updatePets, role} = await modal.onDidDismiss();
    if (updatePets && role === 'edit') {
      this.pets$ = this.pets$.pipe(
        map((pet) => {
          pet.forEach((Pet) => {
            if(Pet.id === updatePets.id){
              Pet = updatePets;
            }
            return Pet;
          });
          return pet;
        })
      );
    }

    if (role === 'delete'){
      this.pets$ = this.pets$.pipe(
        map((pet) => {
          pet.filter((Pet) => Pet.id  !== updatePets.id);
          return pet;
        })
      );
    }
  }

}
