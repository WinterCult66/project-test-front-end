import { Component, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-adidas',
  templateUrl: './adidas.component.html',
  styleUrls: ['./adidas.component.scss']
})
export class AdidasComponent implements OnInit {

  img1 = "/assets/images/bg/1.jpg";
  img2 = "/assets/images/logo/logo_adidas.svg";
  img3 = "/assets/images/player/messi.jpg";
  img4 = "/assets/images/logo/nemeziz.svg";
  img5 = "/assets/images/bg/4.png";
  img6 = "/assets/images/logo/linea1.svg";
  img7 = "/assets/images/slider/3_1.jpg";
  img8 = "/assets/images/slider/3_2.jpg";
  img9 = "/assets/images/slider/3_3.jpg";
  img10 = "/assets/images/bg/2.jpg";

  constructor() {

    if (environment.production == true) {
      this.img1 = '../project-test-front-end' + this.img1;
      this.img2 = '../project-test-front-end' + this.img2;
      this.img3 = '../project-test-front-end' + this.img3;
      this.img4 = '../project-test-front-end' + this.img4;
      this.img5 = '../project-test-front-end' + this.img5;
      this.img6 = '../project-test-front-end' + this.img6;
      this.img7 = '../project-test-front-end' + this.img7;
      this.img8 = '../project-test-front-end' + this.img8;
      this.img9 = '../project-test-front-end' + this.img9;
      this.img10 = '../project-test-front-end' + this.img10;

    }

  }

  ngOnInit(): void {
  }

}
