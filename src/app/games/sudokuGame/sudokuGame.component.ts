import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sudokuGame',
  templateUrl: './sudokuGame.component.html',
  styleUrls: ['./sudokuGame.component.css']
})
export class SudokuGameComponent implements OnInit {

  constructor(public navCtrl: NavController) { }
  Selected = 0

  ngOnInit() {
  }

  backSudoku() {
    this.navCtrl.navigateForward('/sudoku');
  }
  selection(number) {
    var quadradoSudoko = document.getElementById(number.toString()).children[0];

    if (this.Selected === 0)
      return;

    if (quadradoSudoko.getAttribute("data-framework") == "api")
      return;

    quadradoSudoko.setAttribute('value', this.Selected.toString())
  }

  selection1() {
    this.Selected = 1
  }

  selection2() {
    this.Selected = 2
  }

  selection3() {
    this.Selected = 3
  }

  selection4() {
    this.Selected = 4
  }

  selection5() {
    this.Selected = 5
  }

  selection6() {
    this.Selected = 6
  }

  selection7() {
    this.Selected = 7
  }

  selection8() {
    this.Selected = 8
  }

  selection9() {
    this.Selected = 9
  }
}