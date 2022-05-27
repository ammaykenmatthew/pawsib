import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdoptPageRoutingModule } from './adopt-routing.module';

import { AdoptPage } from './adopt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdoptPageRoutingModule
  ],
  declarations: [AdoptPage]
})
export class AdoptPageModule {}
