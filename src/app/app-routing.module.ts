import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // Redirecionar para 'home' ao acessar a raiz
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule), // Caminho para o módulo Home
  },
  {
    path: 'exercises/ex1',
    loadChildren: () =>
      import('./exercises/ex1/ex1.module').then((m) => m.Ex1PageModule),
  },
  {
    path: 'exercises/ex2',
    loadChildren: () =>
      import('./exercises/ex2/ex2.module').then((m) => m.Ex2PageModule),
  },
  {
    path: 'exercises/ex3',
    loadChildren: () =>
      import('./exercises/ex3/ex3.module').then((m) => m.Ex3PageModule),
  },
  {
    path: 'exercises/ex4',
    loadChildren: () =>
      import('./exercises/ex4/ex4.module').then((m) => m.Ex4PageModule),
  },
  {
    path: 'exercises/ex5',
    loadChildren: () =>
      import('./exercises/ex5/ex5.module').then((m) => m.Ex5PageModule),
  },
  {
    path: 'exercises/ex6',
    loadChildren: () =>
      import('./exercises/ex6/ex6.module').then((m) => m.Ex6PageModule),
  },
  {
    path: 'exercises/ex7',
    loadChildren: () =>
      import('./exercises/ex7/ex7.module').then((m) => m.Ex7PageModule),
  },
  {
    path: 'exercises/ex8',
    loadChildren: () =>
      import('./exercises/ex8/ex8.module').then((m) => m.Ex8PageModule),
  },
  {
    path: 'exercises/ex9',
    loadChildren: () =>
      import('./exercises/ex9/ex9.module').then((m) => m.Ex9PageModule),
  },
  {
    path: 'exercises/ex10',
    loadChildren: () =>
      import('./exercises/ex10/ex10.module').then((m) => m.Ex10PageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
