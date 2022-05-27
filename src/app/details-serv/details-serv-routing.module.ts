import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsServPage } from './details-serv.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsServPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsServPageRoutingModule {}
