import { Component, Input, OnInit } from '@angular/core';
import {  ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../Services/api.service';
import { LoaderService } from '../Services/loader.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Pets } from '../Services/pet.schema';
import { ServService } from '../Services/serv.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import {  UserService} from '../Services/user.service';
import { Services } from '../Services/api.schema';

@Component({
  selector: 'app-addsrvc',
  templateUrl: './addsrvc.page.html',
  styleUrls: ['./addsrvc.page.scss'],
})
export class AddsrvcPage implements OnInit {
  @Input() service : Services;

  serviceForm = new FormGroup({
    fullname: new FormControl(),
    email: new FormControl(),
    cpNumber: new FormControl(),
    role: new FormControl(),
    address: new FormControl()
  });

  user_id:any;
  fullname:any;
  email: any;
  cpNumber: any;
  role: any;
  address: any;


  isSubmitted = false;
  isEditMode = false;

  constructor(
    public modalCtrl: ModalController,
    private route: Router,
    private http: HttpClient,
    private _apiService: ApiService, 
    private ionLoader: LoaderService,
    public formBuilder: FormBuilder,
    public servService: ServService,
    public userId: UserService,
  ) { }

  ngOnInit() {

    if (this.service){
      this.isEditMode = true;
      this.setFormValues();
    }
  }

  closeModal(data = null){
    this.modalCtrl.dismiss(data);
  }

  setFormValues() {
    this.service.user_id = this.userId.id;
    this.serviceForm.setValue({
      fullname: this.service.fullname,
      email: this.service.email,
      cpNumber: this.service.cpNumber,
      role: this.service.role,
      address: this.service.address,
      user_id: this.service.user_id,

    });
    this.serviceForm.updateValueAndValidity();
  }

  submitForm(){
    this.isSubmitted = true;
    let response: Observable<Services>; //Service
    
    if (this.isEditMode) {
      response = this.servService.updateServ(  //updateService 
        this.service.id, 
        this.serviceForm.value
      );

    } else  {
      console.log(this.serviceForm.value);

      response = this.servService.addService({  //updateService baguhin yung petsService gawan ng bago servServices
        user_id:this.userId.id,
        fullname:this.serviceForm.get('fullname').value,
        email:this.serviceForm.get('email').value,
        cpNumber:this.serviceForm.get('cpNumber').value,
        role:this.serviceForm.get('role').value,
        address:this.serviceForm.get('address').value,

      });
    }
      response.pipe(take(1)).subscribe((service)=>{
      // this.userId.id = pet.id; //Added


      this.ionLoader.showLoader();
      this.route.navigate(['/home2']);
      this.modalCtrl.dismiss(); 
      console.log(service);
      if (this.isEditMode){
        this.closeModal(service);
      }
      
    });
    }

  async dismiss(){
    await this.modalCtrl.dismiss();
  }
}
