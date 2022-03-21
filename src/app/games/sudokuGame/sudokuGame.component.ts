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

  backHome() {
    this.navCtrl.navigateForward('/home');
  }
  selection(number){
    console.log(this.Selected)
    if(this.Selected === 0)
    {
      return;
    }
    console.log('tentou1')
    var a = document.getElementById(number).children[0]
    console.log(a)
    a.setAttribute('value',this.Selected.toString()) 
  }

  selection1(){
    this.Selected = 1
    console.log(this.Selected)
  }

  selection2(){
    this.Selected = 2
    console.log(this.Selected)
  }

  selection3(){
    this.Selected = 3
    console.log(this.Selected)
  }

  selection4(){
    this.Selected = 4
    console.log(this.Selected)
  }

  selection5(){
    this.Selected = 5
    console.log(this.Selected)
  }

  selection6(){
    this.Selected = 6
    console.log(this.Selected)
  }

  selection7(){
    this.Selected = 7
    console.log(this.Selected)
  }

  selection8(){
    this.Selected = 8
    console.log(this.Selected)
  }

  selection9(){
    this.Selected = 9
    console.log(this.Selected)
  }

  

}
