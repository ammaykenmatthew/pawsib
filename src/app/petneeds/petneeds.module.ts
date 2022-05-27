import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetneedsPageRoutingModule } from './petneeds-routing.module';

import { PetneedsPage } from './petneeds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetneedsPageRoutingModule
  ],
  declarations: [PetneedsPage]
})
export class PetneedsPageModule {}
