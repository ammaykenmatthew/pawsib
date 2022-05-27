import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddsrvcPage } from './addsrvc.page';

const routes: Routes = [
  {
    path: '',
    component: AddsrvcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddsrvcPageRoutingModule {}
