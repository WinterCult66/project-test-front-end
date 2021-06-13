import { Injectable } from '@angular/core';
import { CommonHttpClient } from '../model/CommonHttpClient';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitterService extends CommonHttpClient {

  constructor(private httpClient: HttpClient,) { 
    super("urlxxxxapitwiter");
  }

 /* getTypesOfTax() {
    let urlGetTowns = this.constructUrlToRequest("/list/types");
    return this.httpClient.get(urlGetTowns, { headers: this.headers }).map(res => {
      return res;
    });
  }*/
}
