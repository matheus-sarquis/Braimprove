import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.scss'],
})
export class MemoriaComponent implements OnInit {

  Selected = 1

  constructor(public navCtrl : NavController) { }

  ngOnInit() {}

  backHome(){
    this.navCtrl.navigateForward('/home');    
  }

  jogarMemoria(){
    this.navCtrl.navigateForward('/memoriaGame');    
  }

  selectionEasy(){
    this.Selected = 1
    console.log(this.Selected)
  }


  selectionMedium(){
    this.Selected = 2
    console.log(this.Selected)
  }

  selectionHard(){
    this.Selected = 3
    console.log(this.Selected)
  }
}
