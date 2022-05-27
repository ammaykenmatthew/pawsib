import { Component, Input, OnInit } from '@angular/core';
import {  ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../Services/api.service';
import { LoaderService } from '../Services/loader.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RequestSrv } from '../Services/api.schema';
import { RequestService } from '../Services/requestSrv.service';
import { Services } from '../Services/api.schema';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserService} from '../Services/user.service';
import { ServService } from '../Services/serv.service';

@Component({
  selector: 'app-request1',
  templateUrl: './request1.page.html',
  styleUrls: ['./request1.page.scss'],
})
export class Request1Page implements OnInit {
  @Input() req : RequestSrv;
  

  @Input() serv: Services;

  reqForm = new FormGroup({
    fullName: new FormControl(),
    eMail: new FormControl(),
    cpNumber: new FormControl(),
    details: new FormControl(),
    service_id: new FormControl(),
  });

  service_id:any;
  fullName:any;
  eMail: any;
  cpNumber: any;
  details: any;


  isSubmitted = false;
  isEditMode = false;

  constructor(
    public modalCtrl: ModalController,
    private route: Router,
    private http: HttpClient,
    private ionLoader: LoaderService,
    public formBuilder: FormBuilder,
    public requestSrv : RequestService,
    public servId: ServService, 
  ) { }

  ngOnInit() {
    if (this.req){
      this.isEditMode = true;
      this.setFormValues();
    }
  }
 

closeModal(data = null){
  this.modalCtrl.dismiss(data);
}

setFormValues() {
  //this.req.service_id = this.servId.id;
  this.reqForm.setValue({
    fullName: this.req.fullName,
    eMail: this.req.eMail,
    cpNumber: this.req.cpNumber,
    details: this.req.details,
    service_id: this.req.service_id,
    //service_id: this.servId.id, 
    //servId

  });
  this.reqForm.updateValueAndValidity();
}

submitForm(){
  this.isSubmitted = true;
  let response: Observable<RequestSrv>;

  response = this.requestSrv.addRequest({
      
      fullName:this.reqForm.get('fullName').value,
      eMail:this.reqForm.get('eMail').value,
      cpNumber:this.reqForm.get('cpNumber').value,
      details:this.reqForm.get('details').value,
      service_id:this.reqForm.get('service_id').value,
      //service_id:this.servId.id, //servId
      

    });
  
    response.pipe(take(1)).subscribe((req)=>{
    // this.userId.id = pet.id; //Added
    this.ionLoader.showLoader();
    this.route.navigate(['/allserv']);
    this.modalCtrl.dismiss(); 
    console.log(req);
    if (this.isEditMode){
      this.closeModal(req);
    }
    
  });
  }




  async dismiss(){
    await this.modalCtrl.dismiss();
  }
}

