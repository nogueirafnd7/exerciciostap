import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Ex1PageRoutingModule } from './ex1-routing.module';
import { Ex1Page } from './ex1.page';
import { ReusableCardComponent } from './reusable-card/reusable-card.component'; // Import do componente

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex1PageRoutingModule
  ],
  declarations: [Ex1Page, ReusableCardComponent] // Adicionar o componente aqui
})
export class Ex1PageModule {}
