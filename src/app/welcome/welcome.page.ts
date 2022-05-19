import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    private route: Router,
    public UserName: UserService,
    

  ) { }

  ngOnInit() {
  }
  goToLogin(){
    this.route.navigate(['/login'], {replaceUrl:true});
  }
  join(){
    this.route.navigate(['/join']);
  }

}
