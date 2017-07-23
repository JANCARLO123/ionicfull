import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

  slides = [
    {
      title: "WELCOME",
      description: "This is ionic3FullApp with firebase  introduction / walkthrough page ",
      image: "./assets/slide1.png",
      color: "#ff2d55"
    },
    {
      title: "Layout with firebase",
      description: "This is ionic3FullApp with firebase introduction / walkthrough page",
      image: "./assets/slide2.png",
      color: "#007aff"
    },
    {
      title: "Components",
      description: "This is ionic3FullApp with firebase introduction / walkthrough page",
      image: "./assets/slide3.png",
      color: "#ffcc00"
    },
    {
      title: "Theme",
      description: "This is ionic3FullApp with firebase introduction / walkthrough page",
      image: "./assets/slide4.png",
      color: "#673ab7"
    }
  ];


  constructor(public navCtrl: NavController) {
  }

}
