import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-theme',
  templateUrl: 'theme.html'
})
export class ThemePage {
  mdColor:any[] = [];
  iosColor:any[] = [];
  miscColor:any[] = [];
  themeView: string = "md";
  private color: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.color = 'black';
         
       this.mdColor = [
        {colorName:'red',colorCode:'#f44336'},
        {colorName:'pink',colorCode:'#EA1E63'},
        {colorName:'purple',colorCode:'#f44336'},
        {colorName:'deeppurple',colorCode:'#673ab7'},
        {colorName:'indigo',colorCode:'#3f51b5'},
        {colorName:'blue',colorCode:'#2196f3'},
        {colorName:'blue2',colorCode:'#0034a7'},
        {colorName:'lightblue',colorCode:'#03a9f4'},
        {colorName:'cyan',colorCode:'#009688'},
        {colorName:'green',colorCode:'#4caf50'},
        {colorName:'lightgreen',colorCode:'#8dc34b'},
        {colorName:'lime',colorCode:'#cddc39'},       
        {colorName:'yellow',colorCode:'#ffeb3b'},
        {colorName:'amber',colorCode:'#ffc107'},
        {colorName:'orange',colorCode:'#ff9800'},
        {colorName:'deeporange',colorCode:'#ff5722'},
        {colorName:'brown',colorCode:'#795548'},       
        {colorName:'gray',colorCode:'#607d8b'},
        {colorName:'black',colorCode:'#000000'}
      ];       
      this.iosColor = [
        {colorName:'ios-gray',colorCode:'#8e8e93'},
        {colorName:'ios-lightblue',colorCode:'#5ac8fa'},
        {colorName:'ios-blue',colorCode:'#007aff'},
        {colorName:'ios-yellow',colorCode:'#ffcc00'},
        {colorName:'ios-orange',colorCode:'#ff9500'},
        {colorName:'ios-pink',colorCode:'#ff2d55'},
        {colorName:'ios-green',colorCode:'#4cd964'},
        {colorName:'ios-red',colorCode:'#ff3b30'}
      ];      
      this.miscColor = [
        {colorName:'primary',colorCode:'#84BF41'},
        {colorName:'secondary',colorCode:'#32db64'},
        {colorName:'danger',colorCode:'#f53d3d'},
        {colorName:'light',colorCode:'#f4f4f4'},
        {colorName:'dark',colorCode:'#222'}
      ];
        
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemePage');
  }
  changeColor(color:string) {
      this.color = color;
    }
}
