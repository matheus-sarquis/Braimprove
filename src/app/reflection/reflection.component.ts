import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reflection',
  templateUrl: './reflection.component.html',
  styleUrls: ['./reflection.component.scss'],
})
export class ReflectionComponent implements OnInit {

  constructor(public navCtrl : NavController) { }

  ngOnInit() {}

  backHome(){
    this.navCtrl.navigateForward('/home');   
  }
  jogarReflection(){
      this.navCtrl.navigateForward('/reflectionGame');    
     
  }
}

