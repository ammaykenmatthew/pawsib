import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetneedsPage } from './petneeds.page';

const routes: Routes = [
  {
    path: '',
    component: PetneedsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetneedsPageRoutingModule {}
