import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomDogPage } from './random-dog.page';

const routes: Routes = [
  {
    path: '',
    component: RandomDogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomDogPageRoutingModule {}
