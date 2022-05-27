import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PetsService } from '../Services/pets.service';
import { LoaderService } from '../Services/loader.service';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Pets } from '../Services/pet.schema';
import { DetailsPetComponent } from '../details-pet/details-pet.component';
import { UserService } from '../Services/user.service';
import { DetailsPet2Page } from '../details-pet2/details-pet2.page';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.page.html',
  styleUrls: ['./adopt.page.scss'],
})
export class AdoptPage implements OnInit {
  pets$: Observable<Pets[]>

  constructor(
    private http: HttpClient,
    private route: Router,
    private petsService: PetsService, 
    private ionLoader: LoaderService,
    public modalCtrl: ModalController,
    public userId: UserService,
  ) { }

 
  goToHome(){
    this.route.navigate(['/home']);
  }

  async ngOnInit() {
    const loading = await this.ionLoader.showLoader;
    
    this.pets$ = this.petsService.getAdoptPets(this.pets$).pipe(
      tap((pets) => {
        console.log(pets);
        return pets;
      })
    );
  }

  async openDetailModal(pet: Pets){
    const modal = await this.modalCtrl.create({
      component: DetailsPet2Page, //Change to DetailsPetComponent2
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