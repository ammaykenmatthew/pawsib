import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewpetPageRoutingModule } from './viewpet-routing.module';

import { ViewpetPage } from './viewpet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewpetPageRoutingModule
  ],
  declarations: [ViewpetPage]
})
export class ViewpetPageModule {}
