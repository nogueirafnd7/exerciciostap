import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex9PageRoutingModule } from './ex9-routing.module';

import { Ex9Page } from './ex9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex9PageRoutingModule
  ],
  declarations: [Ex9Page]
})
export class Ex9PageModule {}
