import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiJsonService {
  private publiKey = '3519d8ca22dc39287f25ec9fe72c261f';
  private baseComics = 'https://gateway.marvel.com:443/v1/public/comics?orderBy=issueNumber&limit=10&apikey=' + this.publiKey;

  private baseSerie = 'https://gateway.marvel.com:443/v1/public/series?limit=25&apikey=' + this.publiKey;

  constructor(
    private readonly http: HttpClient
  ) {
  }

  getComics(): Observable<any> {
    return this.http.get<any>(this.baseComics).pipe(map((data: any) => data.data.results));
  }

  getSeries(): Observable<any> {
    return this.http.get<any>(this.baseSerie).pipe(map((data: any) => data.data.results));
  }

}


