import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome2',
  templateUrl: './welcome2.page.html',
  styleUrls: ['./welcome2.page.scss'],
})
export class Welcome2Page implements OnInit {

  constructor(private route: Router,) { }

  ngOnInit() {
  }
  home(){
    this.route.navigate(['/home'])
  }
  home2(){
    this.route.navigate(['/home2'])
  }
}
