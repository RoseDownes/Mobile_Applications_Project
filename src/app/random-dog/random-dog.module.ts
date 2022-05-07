import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomDogPageRoutingModule } from './random-dog-routing.module';

import { RandomDogPage } from './random-dog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomDogPageRoutingModule
  ],
  declarations: [RandomDogPage]
})
export class RandomDogPageModule {}
