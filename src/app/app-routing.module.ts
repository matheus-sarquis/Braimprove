import { ReflectionComponent } from './reflection/reflection.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SudokuComponent } from './sudoku/sudoku.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'memoria',
    component: MemoriaComponent
  },

  {
    path: 'sudoku',
    component: SudokuComponent
  },

  {
    path: 'reflection',
    component: ReflectionComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
