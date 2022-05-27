import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPet2PageRoutingModule } from './details-pet2-routing.module';

import { DetailsPet2Page } from './details-pet2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPet2PageRoutingModule
  ],
  declarations: [DetailsPet2Page]
})
export class DetailsPet2PageModule {}
