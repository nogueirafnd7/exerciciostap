import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex8PageRoutingModule } from './ex8-routing.module';

import { Ex8Page } from './ex8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex8PageRoutingModule
  ],
  declarations: [Ex8Page]
})
export class Ex8PageModule {}
