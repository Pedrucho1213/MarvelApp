import {Component, OnInit} from '@angular/core';
import {ApiJsonService} from '../services/api-json.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.pacge.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  serie: Observable<any>;

  constructor(
    private api: ApiJsonService
  ) {
  }

  ngOnInit() {
    this.getSerie();
  }

  getSerie() {
    this.serie = this.api.getSeries();
  }
}
