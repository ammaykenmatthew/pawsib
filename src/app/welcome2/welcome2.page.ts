import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../Services/loader.service';

@Component({
  selector: 'app-welcome2',
  templateUrl: './welcome2.page.html',
  styleUrls: ['./welcome2.page.scss'],
})
export class Welcome2Page implements OnInit {

  constructor(
    private route: Router,
    private ionLoader: LoaderService,
    ) { }

  ngOnInit() {
  }
  home(){
    this.route.navigate(['/home']);
  }
  goToLogin(){
    this.ionLoader.showLoader();
    this.route.navigate(['/login']);
  }
}
