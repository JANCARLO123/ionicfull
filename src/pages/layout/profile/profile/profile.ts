import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController ,ToastController } from 'ionic-angular';
import { AngularFireDatabase ,FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  following: boolean = false;
  profile:  FirebaseObjectObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: AngularFireDatabase,public loadingCtrl: LoadingController,private toastCtrl: ToastController) {

    let loadingPopup = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });
    loadingPopup.present();
    this.profile = database.object('/profile/1');
    this.profile.subscribe(() => loadingPopup.dismiss());
  }

  follow() {
    this.following = !this.following;
    this.presentToast('bottom','Follow user clicked');
  }

  presentToast(position: string,message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      position: position,
      duration: 1000
    });
    toast.present();
  }

}
