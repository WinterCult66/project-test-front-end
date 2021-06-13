import { Component, OnInit } from '@angular/core';
import { TwitterService } from 'src/app/services/twitter.service';

@Component({
  selector: 'app-twiter',
  templateUrl: './twiter.component.html',
  styleUrls: ['./twiter.component.scss']
})
export class TwiterComponent implements OnInit {

  constructor(private twitterService: TwitterService) { }

  ngOnInit(): void {
    this.twitterService.getArtist();
  }

}
