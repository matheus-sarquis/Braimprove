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

  openComoJogar() {
    this.nativePageTransitions.slide(this.options);
    this.navCtrl.navigateForward('/comojogar');
  }

  openSobre() {
    this.nativePageTransitions.slide(this.options);
    this.navCtrl.navigateForward('/sobre');
  }

  open() {
    var msg = 'Baixe o mais novo aplicativo de melhoria cerebral, Braimprove: '+ 'https://cutt.ly/mSUmBsT'
    console.log("4")
    let target = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
    document.getElementById("whatsapp-share-btt").setAttribute('href', "https://api.whatsapp.com/send?text=" + msg)

    this.nativePageTransitions.slide(this.options);
    this.navCtrl.navigateForward('/home');
  }


  //  whats() {
  //   console.log("5")
  //   //conte??do que ser?? compartilhado: T??tulo da p??gina + URL
  //   var conteudo = encodeURIComponent(document.title + " " + window.location.href);
  //   //altera a URL do bot??o //https://cutt.ly/mSUmBsT
  
  //   document.getElementById("whatsapp-share-btt").setAttribute('href', "https://api.whatsapp.com/send?text=" + conteudo)
  //}
}

// document.addEventListener("DOMContentLoaded", function() {
//   //conte??do que ser?? compartilhado: T??tulo da p??gina + URL
//   var conteudo = encodeURIComponent(document.title + " " + window.location.href);
//   //altera a URL do bot??o
//   document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?text=" + conteudo;
// }, false);






