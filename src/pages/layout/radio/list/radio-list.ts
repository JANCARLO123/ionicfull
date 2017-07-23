import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, LoadingController } from 'ionic-angular';
import { AngularFireDatabase ,FirebaseListObservable} from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-radio-list',
  templateUrl: 'radio-list.html'
})
export class RadioListPage {

  radioList: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,public loadingCtrl: LoadingController ,public database:AngularFireDatabase) {

    let loadingPopup = this.loadingCtrl.create({
      spinner: 'crescent', 
      content: ''
    });
    loadingPopup.present();

    this.radioList = database.list('/radio');
    this.radioList.subscribe(() => loadingPopup.dismiss());
  }

  openPlayer(radioId) {
    let profileModal = this.modalCtrl.create('RadioPage', { 
      radioId: radioId
    });
    profileModal.present();
  }
}
