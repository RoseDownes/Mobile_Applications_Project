import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogStatusPage } from './dog-status.page';

const routes: Routes = [
  {
    path: '',
    component: DogStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogStatusPageRoutingModule {}
