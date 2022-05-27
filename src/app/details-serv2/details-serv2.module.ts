import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsServ2PageRoutingModule } from './details-serv2-routing.module';

import { DetailsServ2Page } from './details-serv2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsServ2PageRoutingModule
  ],
  declarations: [DetailsServ2Page]
})
export class DetailsServ2PageModule {}
