import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';

import { LoginPage } from './login/login.page';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient ) {
    this.http.get('http://localhost:8000/api/passwordofuser/kirishan').subscribe(console.log);
  }
}
