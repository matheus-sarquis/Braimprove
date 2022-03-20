import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss'],
})
export class SudokuComponent implements OnInit {

  constructor(public navCtrl : NavController) { }

  ngOnInit() {}

  backHome(){
    this.navCtrl.navigateForward('/home');    
  }

}
