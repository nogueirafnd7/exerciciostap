import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex10Page } from './ex10.page';

const routes: Routes = [
  {
    path: '',
    component: Ex10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex10PageRoutingModule {}
