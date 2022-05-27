import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsServPageRoutingModule } from './details-serv-routing.module';

import { DetailsServPage } from './details-serv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsServPageRoutingModule
  ],
  declarations: [DetailsServPage]
})
export class DetailsServPageModule {}
