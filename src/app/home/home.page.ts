import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MemoriaComponent } from './../memoria/memoria.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public navCtrl: NavController) {}

  openMemoria(){
    this.navCtrl.navigateForward('/memoria');    
  }

  openSudoku(){
    this.navCtrl.navigateForward('/sudoku');    
  }

  openTiroAoAlvo(){
    this.navCtrl.navigateForward('/reflection');    
  }
}
