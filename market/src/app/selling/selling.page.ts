import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';
import { AlertController, LoadingController } from '@ionic/angular';
import { VegitablesService } from '../services/vegitables.service';
import { Vegitable } from '../interfaces.model';
import { AuthService } from '../services/auth.service';
import { SellService } from '../services/sell.service';

@Component({
  selector: 'app-selling',
  templateUrl: './selling.page.html',
  styleUrls: ['./selling.page.scss'],
})
export class SellingPage implements OnInit {

  vegitables$: Observable<Vegitable[]>= new Observable();

  veg_name: string = "";
  description: string = "";
  price: string = "";
  negotiable: string = "";

  username: string =this.authservice.username;

  constructor(

    private loadingcontrol: LoadingController,
    private vegitablesservice: VegitablesService,
    private authservice: AuthService,
    private sellservice: SellService

  ) { }

  async ngOnInit() {

    const loading= await this.loadingcontrol.create({message: 'loading...'});
    loading.present();

    this.vegitables$=this.vegitablesservice.getvegitables();
    console.log(this.vegitables$);
    loading.dismiss();
  }

  updateVariable(event: any) {
    this.negotiable = event.target.checked ? 'Yes' : 'No';
  }



  async addsell(){
    const loading = await this.loadingcontrol.create({message: 'Please Wait ...'});
    loading.present();

    console.log(this.veg_name,this.username,this.description,this.price,this.negotiable);

    this.sellservice.addsell(this.veg_name,this.username,this.description,this.price,this.negotiable);
    this.resetall();
    loading.dismiss();
  }

  resetall(){

    this.veg_name = "";
    this.description = "";
    this.price= "";
    this.negotiable = "";

  }

}
