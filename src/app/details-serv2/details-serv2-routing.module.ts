import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsServ2Page } from './details-serv2.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsServ2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsServ2PageRoutingModule {}
