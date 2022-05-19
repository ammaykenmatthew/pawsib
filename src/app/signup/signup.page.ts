import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../Services/api.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { LoaderService } from '../Services/loader.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

ionicForm = new FormGroup({
  name: new FormControl(),
  email: new FormControl(),
  number: new FormControl(),
  password: new FormControl(),
  confirm_password: new FormControl()
});
  
isSubmitted = false;
  
  name: any;
  email: any;
  number: any;
  password: any;
  confirm_password:any;


  constructor(
    private route: Router,
    private _apiService: ApiService,
    private http: HttpClient,
    public formBuilder: FormBuilder,
    private ionLoader: LoaderService,
  ) { }
 
  
  ngOnInit() {
    // this.ionicForm = this.formBuilder.group({
    //   name: ['', [Validators.required, Validators.minLength(2)]],
    //   email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    //   number: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    //   password: ['', [Validators.required, Validators.pattern('^(([a-zA-Z][^:.*/}{;])*\d*)$'), Validators.minLength(8)]],
    //   confirm_password: ['', [Validators.required]],
    // }); 
  }

  // static passwordsMatch(control: FormGroup): {[err: string]: any} {
  //   let password = control.get('password');
  //   let confirm_password = control.get('confirm_password');
  //   let rv: {[error: string]: any} = {};
  //   if ((password.touched || confirm_password.touched) && password.value !== confirm_password.value) {
  //     rv['passwordMismatch'] = true;
  //   }
  //   return rv;
  // }

  // get errorControl() {
  //   return this.ionicForm.controls;
  // }
  // submitForm() {
  //   this.isSubmitted = true;
  //   if (!this.ionicForm.valid) {
  //     console.log('Please provide all the required values!')
  //     return false;
  //   } else {
  //     console.log(this.ionicForm.value)
  //   }
  // }
  
 
  // welcome(){
  //   this.route.navigate(['/welcome']);
  // }


  submitForm(){
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
    this._apiService.saveUserData(this.ionicForm.value).subscribe((result:any)=>{
      console.log("SUCCESS", result);
      this.ionLoader.showLoader();
      this.route.navigate(['/welcome'], {replaceUrl:true});
    }), (error: any)=> {
      console.log("Error", error);
    }
  }
  }
  
  //LOGIN
  login(){
    this.route.navigate(['/login']);
  }




//  submit(){
//    let data = {
//      name: this.name,
//      email: this.email,
//      number: this.number,
//      password: this.password,
//      confirm_password:this.confirm_password,
//    }
//    console.log(data);
//       this._apiService.saveUserData(data).subscribe((res:any) => {
//         console.log("SUCCESS",res);
//         this.route.navigate(['/welcome']);
//       },(error: any) => {
//         console.log("Error",error);
//       })
//  }
 



}
