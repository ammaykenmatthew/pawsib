import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PspagePage } from './pspage.page';

const routes: Routes = [
  {
    path: '',
    component: PspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PspagePageRoutingModule {}
