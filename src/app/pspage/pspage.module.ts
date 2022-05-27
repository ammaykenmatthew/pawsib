import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PspagePageRoutingModule } from './pspage-routing.module';

import { PspagePage } from './pspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PspagePageRoutingModule
  ],
  declarations: [PspagePage]
})
export class PspagePageModule {}
