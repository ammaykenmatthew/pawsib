import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsReq1PageRoutingModule } from './details-req1-routing.module';

import { DetailsReq1Page } from './details-req1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsReq1PageRoutingModule
  ],
  declarations: [DetailsReq1Page]
})
export class DetailsReq1PageModule {}
