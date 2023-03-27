import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SellingPage } from '../selling/selling.page';
import { BuyingPage } from '../buying/buying.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}



  goToBuy(){
    this.navCtrl.navigateForward('/buying');
  }
   goToSell(){
    this.navCtrl.navigateForward('/selling');
  }
}
