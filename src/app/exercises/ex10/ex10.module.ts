import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex10PageRoutingModule } from './ex10-routing.module';

import { Ex10Page } from './ex10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex10PageRoutingModule
  ],
  declarations: [Ex10Page]
})
export class Ex10PageModule {}
