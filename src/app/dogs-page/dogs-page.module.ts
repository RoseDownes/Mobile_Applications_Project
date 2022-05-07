import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DogsPagePageRoutingModule } from './dogs-page-routing.module';

import { DogsPagePage } from './dogs-page.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DogsPagePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [DogsPagePage]
})
export class DogsPagePageModule {}
