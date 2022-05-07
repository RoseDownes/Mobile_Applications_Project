import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogsPagePage } from './dogs-page.page';

const routes: Routes = [
  {
    path: '',
    component: DogsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogsPagePageRoutingModule {}
