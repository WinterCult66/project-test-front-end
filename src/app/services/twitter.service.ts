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

  getArtist(){

    const headers = {
      "Authorization":"Bearer BQDZQGLuW3lLRx2spTLQyD4lEt0ndUOfP441HicKqPZ7wAb7U1oaAXuH8HinBGIhvaJJQlK4h0geXN9Ep9I"
    }
    this.httpClient.get("https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6", {headers}).subscribe(resp=>{
      console.log(resp)
    })
  }

 /* getTypesOfTax() {
    let urlGetTowns = this.constructUrlToRequest("/list/types");
    return this.httpClient.get(urlGetTowns, { headers: this.headers }).map(res => {
      return res;
    });
  }*/
}
