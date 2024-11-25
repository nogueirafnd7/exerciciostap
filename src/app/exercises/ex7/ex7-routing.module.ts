import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex7Page } from './ex7.page';

const routes: Routes = [
  {
    path: '',
    component: Ex7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex7PageRoutingModule {}
