import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Password } from './login.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor(
    private router: Router,
    private alertcontrol: AlertController,
    private loadingcontrol: LoadingController,
    private authservice: AuthService,
    private navController: NavController
    ) {
  }

  username: string='';
  password: string='';
  password$: Observable<Password[]>= new Observable();

  ngOnInit() {
  }



  async login() {
   if(this.username==''|| this.password=='')
   {
      this.alerlogin();
   }

   else{
    //console.log(this.username);
    const loading= await this.loadingcontrol.create({message: 'loading...'});
    loading.present();

    this.password$=this.authservice.getpassword(this.username).pipe(
      tap((password: Password[])=>{
        loading.dismiss();
        //console.log(password);
       // this.router.navigateByUrl('/home');
       // return password;
       if (password.length > 0 && password[0].password == this.password) {
        this.authservice.username = this.username;
        console.log(this.authservice.username);
        this.navController.navigateRoot('/home');
      } else {
        this.falselogin();
      }
      })
    );

   }
    this.password$.subscribe(() =>{
        //navigate to the  next page or perform other actions
   });
  }

  async alerlogin(){

    const alert= await this.alertcontrol.create({
      header:'alert',
      message:'empty field',
      buttons:['ok']
    });

    await alert.present();
  }

  async falselogin(){

    const alert= await this.alertcontrol.create({
      header:'alert',
      message:'username and password not matched',
      buttons:['ok']
    });

    await alert.present();
  }

}
