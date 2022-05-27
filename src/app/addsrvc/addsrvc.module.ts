import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AddsrvcPageRoutingModule } from './addsrvc-routing.module';

import { AddsrvcPage } from './addsrvc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddsrvcPageRoutingModule
  ],
  declarations: [AddsrvcPage]
})
export class AddsrvcPageModule {}
