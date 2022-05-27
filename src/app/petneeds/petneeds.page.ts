import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-petneeds',
  templateUrl: './petneeds.page.html',
  styleUrls: ['./petneeds.page.scss'],
})
export class PetneedsPage implements OnInit {

  constructor(
    private route: Router,
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

  sliderConfig = {
    spaceBetween: 11,
    centeredSlides: true,
    slidesPerView: 1.6,
  }

  goToHome(){
    this.route.navigate(['/home']);
  }

  goToShop1(){
    this.http.get("https://shopee.ph/effpp");
  }

}
