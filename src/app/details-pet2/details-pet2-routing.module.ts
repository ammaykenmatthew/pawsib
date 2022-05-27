import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPet2Page } from './details-pet2.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsPet2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPet2PageRoutingModule {}
