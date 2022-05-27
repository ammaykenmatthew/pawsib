import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { LoaderService } from '../Services/loader.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    private route: Router,
    public UserName: UserService,
    private ionLoader: LoaderService,

  ) { }

  ngOnInit() {
  }
  goToLogin(){
    this.ionLoader.showLoader();
    this.route.navigate(['/login'], {replaceUrl:true});
  }
  join(){
    this.route.navigate(['/join']);
  }

}
