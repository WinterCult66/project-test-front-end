import { Component, OnInit } from '@angular/core';
import { SpootifyService } from 'src/app/services/spootify.service';
import { TwitterService } from 'src/app/services/twitter.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-twiter',
  templateUrl: './twiter.component.html',
  styleUrls: ['./twiter.component.scss']
})
export class TwiterComponent implements OnInit {

  artists = [];
  noImage = "/assets/images/spootify/noImage.png";
  constructor(private twitterService: TwitterService, private spootifyService: SpootifyService) { }

  ngOnInit(): void {
    this.validationifTheTokenIsValid();
  }

  validationifTheTokenIsValid() {
    const dateInLocal = localStorage.getItem("expires_in");
    if (dateInLocal != null) {
      const dateInLocalParse = new Date(dateInLocal);
      const now = new Date();
      if (now > dateInLocalParse) {
        this.requestToken();
      }
    } else {
      this.requestToken();
    }
  }

  requestToken() {
    this.spootifyService.getTokenSpootify().subscribe(res => {
      if (res != "" && res != null) {
        localStorage.setItem("access_token", res["access_token"]);
        var time = res["expires_in"];
        const now = new Date();
        time = (time / 3600);
        now.setHours(now.getHours() + time);
        localStorage.setItem("expires_in", now + "");
      }
    });
  }

  searchArtist(artist) {
    this.artists = [];
    if (artist != "") {
      this.spootifyService.getArtist(artist).subscribe(res => {
        console.log(res)
        this.artists = res["artists"]["items"]
      });
    }
  }

}
