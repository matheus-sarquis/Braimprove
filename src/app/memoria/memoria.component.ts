import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.scss'],
})
export class MemoriaComponent implements OnInit {

  constructor(public navCtrl : NavController) { }

  ngOnInit() {}

  backHome(){
    this.navCtrl.navigateForward('/home');    
  }

}
