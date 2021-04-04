import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/folder/Inbox',
      icon: 'home'
    },
    {
      title: 'Comics',
      url: 'comics',
      icon: 'book'
    },
    {
      title: 'Series',
      url: 'series',
      icon: 'film'
    },
    {
      title: 'Personajes',
      url: 'personajes',
      icon: 'person'
    },

  ];
  constructor() {
  }
}
