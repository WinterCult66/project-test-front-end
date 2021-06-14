import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { CommonHttpClient } from '../model/CommonHttpClient';

import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class SpootifyService extends CommonHttpClient {

  constructor(private httpClient: HttpClient,) {
    super(environment.urlApi);
  }

  getTokenSpootify() {
    var url = this.constructUrlToRequest("/getToken");
    return this.httpClient.get(url).map(res => {
      return res;
    })
  }

  getArtist(artist) {
    const headers = {
      "Authorization": "Bearer " + localStorage.getItem("access_token")
    }

    const urlGetArtist = environment.urlSpootifyApi + "search?q=" + artist + "&limit=6&type=artist";
    return this.httpClient.get(urlGetArtist, { headers }).map(res => {
      return res;
    })
  }
}
