import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllservPage } from './allserv.page';

const routes: Routes = [
  {
    path: '',
    component: AllservPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllservPageRoutingModule {}
