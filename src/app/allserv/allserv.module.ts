import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllservPageRoutingModule } from './allserv-routing.module';

import { AllservPage } from './allserv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllservPageRoutingModule
  ],
  declarations: [AllservPage]
})
export class AllservPageModule {}
