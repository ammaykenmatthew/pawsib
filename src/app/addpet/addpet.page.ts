import { Component, Input, OnInit } from '@angular/core';
import {  ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../Services/api.service';
import { LoaderService } from '../Services/loader.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Pets } from '../Services/pet.schema';
import { PetsService } from '../Services/pets.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import {  UserService} from '../Services/user.service';


@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.page.html',
  styleUrls: ['./addpet.page.scss'],
})
export class AddpetPage implements OnInit {
  @Input() pet : Pets;

  petForm = new FormGroup({
    name: new FormControl(),
    type: new FormControl(),
    breed: new FormControl(),
    gender: new FormControl(),
    age: new FormControl()
  });

  user_id:any;
  name:any;
  type: any;
  breed: any;
  gender: any;
  age: any;


  isSubmitted = false;
  isEditMode = false;

  constructor(
    public modalCtrl: ModalController,
    private route: Router,
    private http: HttpClient,
    private _apiService: ApiService, 
    private ionLoader: LoaderService,
    public formBuilder: FormBuilder,
    public petsService: PetsService,
    public userId: UserService,
  ) { }

  ngOnInit() {

    if (this.pet){
      this.isEditMode = true;
      this.setFormValues();
    }
  }

  closeModal(data = null){
    this.modalCtrl.dismiss(data);
  }

  setFormValues() {
    this.pet.user_id = this.userId.id;
    this.petForm.setValue({
      name: this.pet.name,
      type: this.pet.type,
      breed: this.pet.breed,
      gender: this.pet.gender,
      age: this.pet.age,
      user_id: this.pet.user_id,

    });
    this.petForm.updateValueAndValidity();
  }

  submitForm(){
    this.isSubmitted = true;
    let response: Observable<Pets>;
    
    if (this.isEditMode) {
      response = this.petsService.updatePets(
        this.pet.id, 
        this.petForm.value
      );

    } else  {
      console.log(this.petForm.value);

      response = this.petsService.addPets({
        user_id:this.userId.id,
        name:this.petForm.get('name').value,
        type:this.petForm.get('type').value,
        breed:this.petForm.get('breed').value,
        gender:this.petForm.get('gender').value,
        age:this.petForm.get('age').value,

      });
    }
      response.pipe(take(1)).subscribe((pet)=>{
      // this.userId.id = pet.id; //Added


      this.ionLoader.showLoader();
      this.route.navigate(['/home']);
      this.modalCtrl.dismiss(); 
      console.log(pet);
      if (this.isEditMode){
        this.closeModal(pet);
      }
      
    });
    }
  

  async dismiss(){
    await this.modalCtrl.dismiss();
  }

}
