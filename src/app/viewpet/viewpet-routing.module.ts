import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewpetPage } from './viewpet.page';

const routes: Routes = [
  {
    path: '',
    component: ViewpetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewpetPageRoutingModule {}
