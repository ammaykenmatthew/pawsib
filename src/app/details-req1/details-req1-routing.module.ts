import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsReq1Page } from './details-req1.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsReq1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsReq1PageRoutingModule {}
