import { Component } from '@angular/core';
import { NavController, ViewWillLeave } from '@ionic/angular';
import { MemoriaComponent } from './../memoria/memoria.component';
import { NativePageTransitions, NativeTransitionOptions } from '@awesome-cordova-plugins/native-page-transitions/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements ViewWillLeave {

  ionViewWillLeave() {

    let options: NativeTransitionOptions = {
       direction: 'up',
       duration: 500,
       slowdownfactor: 3,
       slidePixels: 20,
       iosdelay: 100,
       androiddelay: 150,
       fixedPixelsTop: 0,
       fixedPixelsBottom: 60
      }
   
    this.nativePageTransitions.slide(options)
      .then()
      .catch();
   
   }

  constructor(public navCtrl: NavController, private nativePageTransitions: NativePageTransitions) { }

  options: NativeTransitionOptions = {
    direction: 'up',
    duration: 500,
    slowdownfactor: 3,
    slidePixels: 20,
    iosdelay: 100,
    androiddelay: 150,
    fixedPixelsTop: 0,
    fixedPixelsBottom: 60
  }
  // example of adding a transition when a page/modal closes
  openMemoria() {
    this.nativePageTransitions.slide(this.options);
    this.navCtrl.navigateForward('/memoria');
  }

  openSudoku() {
    this.nativePageTransitions.slide(this.options);
    this.navCtrl.navigateForward('/sudoku');
  }

  openTiroAoAlvo() {
    this.nativePageTransitions.slide(this.options);
    this.navCtrl.navigateForward('/reflection');
  }

  openComoJogar() {
    this.nativePageTransitions.slide(this.options);
    this.navCtrl.navigateForward('/comojogar');
  }

  openSobre() {
    this.nativePageTransitions.slide(this.options);
    this.navCtrl.navigateForward('/sobre');
  }


}
