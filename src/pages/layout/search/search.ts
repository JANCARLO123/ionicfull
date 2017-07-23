import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController  } from 'ionic-angular';
import { AngularFireDatabase , FirebaseListObservable} from 'angularfire2/database';
import 'rxjs/add/operator/map'; // you might need to import this, or not depends on your setup


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
    contact: FirebaseListObservable<any[]>;
    contactArray : any=[]; 
    contactList : any=[]; // store firebase data to local array
    loadedContactList:  any=[]; 
    
    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public database:AngularFireDatabase  ) {
  
      let loadingPopup = this.loadingCtrl.create({
        spinner: 'crescent', // icon style //
        content: ''
      });
      loadingPopup.present();
      this.contact = database.list('/contact');
      this.contact.subscribe(contact => {
            this.contactArray = contact;
            this.contactList = this.contactArray; // for ngFor loop 
            this.loadedContactList = this.contactArray; 
            loadingPopup.dismiss()
      })
            
  }


  initializeItems(){
    this.contactList = this.loadedContactList;
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;
    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
    this.contactList = this.contactList.filter((v) => {
      if(v.name && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    console.log(q, this.contactList.length);

  }

}
