import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-category3',
  templateUrl: 'category3.html'
})

export class Category3Page {
  viewType: string = "Menu";
  category: any[] = [];
  items: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController , public database: AngularFireDatabase) {
    let loadingPopup = this.loadingCtrl.create({
      spinner: 'crescent', 
      content: ''
    });
    loadingPopup.present();

      this.database.list('/category', {query: {
          orderByChild: "type",
          equalTo: "restaurant" 
      }}).subscribe(categoryItems => {
          this.category = categoryItems;
      });


      this.database.list('/list', {query: {
          orderByChild: "promotion",
          equalTo: true
      }}).subscribe(listItems => {        
          this.items = listItems;
          loadingPopup.dismiss();
      });
  }


  openList(categoryId){
      this.navCtrl.push('List3Page',{categoryId:categoryId}); 
  }

  goToDetail(itemId){
      this.navCtrl.push('Detail3Page',{itemId:itemId}); 
  }

}
