import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController , ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-category1',
  templateUrl: 'category1.html'
})
export class Category1Page {
  category: any[] = [];
  viewType: string = "list";

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, public database: AngularFireDatabase,private toastCtrl: ToastController ) {
    let loadingPopup = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });
    loadingPopup.present();
 
        this.database.list('/category', {query: {
            orderByChild: "type",
            equalTo: "place"
        }}).subscribe(categoryItems => {
          this.category = categoryItems;
          loadingPopup.dismiss()
        });
  }


  //*********** Open list page  **************/
  openList(categoryId){
      console.log("openList");
      this.navCtrl.push('List1Page',{categoryId:categoryId}); 
  }


}
