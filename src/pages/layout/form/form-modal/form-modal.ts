import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController } from 'ionic-angular';
import { AngularFireDatabase ,FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-form-modal',
  templateUrl: 'form-modal.html'
})
export class FormModalPage {
  contacts: FirebaseListObservable<any[]>;
 
  constructor(public navCtrl: NavController, public database: AngularFireDatabase, public viewCtrl: ViewController) {
      this.contacts = database.list('/profile');
  }

  selectContact(name,id,imgProfile) {
    console.log("selectContact id = "+id);
    let dataArray = {
      name: name,
      id: id,
      imgProfile: imgProfile
    };
    this.viewCtrl.dismiss(dataArray);
  }


}
