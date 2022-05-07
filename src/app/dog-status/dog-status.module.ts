import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DogStatusPageRoutingModule } from './dog-status-routing.module';

import { DogStatusPage } from './dog-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DogStatusPageRoutingModule
  ],
  declarations: [DogStatusPage]
})
export class DogStatusPageModule {}
