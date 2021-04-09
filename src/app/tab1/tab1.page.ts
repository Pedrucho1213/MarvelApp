import {Component, OnInit} from '@angular/core';
import {ApiJsonService} from '../services/api-json.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  comics: Observable<any>;

  constructor(
    private api: ApiJsonService,
  ) {
  }

  ngOnInit() {
    this.getComics();
  }

  getComics() {
    this.comics = this.api.getComics();
  }


}
