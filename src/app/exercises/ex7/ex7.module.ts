import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex7PageRoutingModule } from './ex7-routing.module';

import { Ex7Page } from './ex7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex7PageRoutingModule
  ],
  declarations: [Ex7Page]
})
export class Ex7PageModule {}
