import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex9Page } from './ex9.page';

const routes: Routes = [
  {
    path: '',
    component: Ex9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex9PageRoutingModule {}
