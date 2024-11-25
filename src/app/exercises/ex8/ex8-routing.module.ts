import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex8Page } from './ex8.page';

const routes: Routes = [
  {
    path: '',
    component: Ex8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex8PageRoutingModule {}
