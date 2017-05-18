import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { Question } from './Model/Question';
import { URLSearchParams, Jsonp } from '@angular/http';

@Injectable()
export class DataService {

  private actionUrl: string;
  private headers: Headers;

  constructor(private jsonp: Jsonp) {

    this.actionUrl = 'https://opentdb.com/api.php?amount=1';
    //
    // this.headers = new Headers();
    // this.headers.append('Content-Type', 'application/json');
    // this.headers.append('Accept', 'application/json');
  }

  public getSingle() {
    // return this.jsonp
    //         .get(this.actionUrl, {})
    //         .toPromise()
    //           .then((response) => response.json());

    var search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', 'Francis Bacon (artist)');
    search.set('format', 'json');
    return this.jsonp
    .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
    .toPromise()
    .then((response) => response.json());
  }
}
