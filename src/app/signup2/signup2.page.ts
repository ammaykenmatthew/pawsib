import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../Services/api.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { LoaderService } from '../Services/loader.service';
import { Users } from '../Services/api.schema';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.page.html',
  styleUrls: ['./signup2.page.scss'],
})
export class Signup2Page implements OnInit {
  @Input() user : Users;

  ionicForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    number: new FormControl(),
    role: new FormControl(),
    place: new FormControl(),
    password: new FormControl(),
    confirm_password: new FormControl(),

  });

  isSubmitted = false;
  
  name: any;
  email: any;
  number: any;
  role: any;
  place: any;
  password: any;
  confirm_password:any;


  constructor(
    private route: Router,
    private _apiService: ApiService,
    private userService: UserService,
    private http: HttpClient,
    public formBuilder: FormBuilder,
    private ionLoader: LoaderService,
  ) { 
    // this.ionicForm = formBuilder.group({
    //     role: ['', Validators.required],
    //     place: ['', Validators.required],
    // });
  }

  ngOnInit() {
    if (this.user){
      this.setFormValues();
    }
  }

  setFormValues() {
    this.ionicForm.setValue({
      name: this.user.name,
      email: this.user.email,
      number: this.user.number,
      role: this.user.role,
      place: this.user.place,
      password: this.user.password,

    });
  }

  submitForm(){
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
   
    this.userService.addUser({
      name:this.ionicForm.get('name').value,
      email:this.ionicForm.get('email').value,
      number:this.ionicForm.get('number').value,
      role:this.ionicForm.get('role').value,
      place:this.ionicForm.get('place').value,
      password:this.ionicForm.get('password').value,
      
    }).subscribe((user)=>{
      console.log(this.ionicForm.value.role);
      console.log(this.ionicForm.value.place);
      console.log("SUCCESS", user);
      this.ionLoader.showLoader();
      this.route.navigate(['/welcome2'], {replaceUrl:true});
    }), (error: any)=> {
      console.log("Error", error);
    }
  }
  }

  // submitForm(){
  //   this.isSubmitted = true;
  //   if (!this.ionicForm.valid) {
  //     console.log('Please provide all the required values!')
  //     return false;
  //   } else {
  //   this._apiService.saveUserData(this.ionicForm.value).subscribe((result:any)=>{
  //     console.log("SUCCESS", result);
  //     this.ionLoader.showLoader();
  //     this.route.navigate(['/welcome2'], {replaceUrl:true});
  //   }), (error: any)=> {
  //     console.log("Error", error);
  //   }
  // }
  // }
}
