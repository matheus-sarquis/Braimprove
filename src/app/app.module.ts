import { ComojogarComponent } from './telas/comojogar/comojogar.component';
import { SobreComponent } from './telas/sobre/sobre.component';
import { SudokuGameComponent } from './games/sudokuGame/sudokuGame.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { ReflectionComponent } from './reflection/reflection.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, MemoriaComponent, ReflectionComponent, SudokuComponent, SudokuGameComponent, ComojogarComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
