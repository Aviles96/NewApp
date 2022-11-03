import { Component } from '@angular/core';

import { Share } from '@capacitor/share';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Customers', url: '/customers', icon: 'people' },
    { title: 'Cities', url: '/cities', icon: 'location' },
    { title: 'login', url: '/login', icon: 'log-in' },
  ];

  constructor() {}

  shareApp()
  {
    Share.share({
      title: 'Has visto la nueva app creada en Ionic 6',
      text: 'Descarga gratis la nueva app y pruebala',
      url: 'http://ionicframework.com/',
    });
  }
}
