import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController ,ToastController} from 'ionic-angular';
import { AuthData } from '../../../../providers/auth-data';
import { AngularFireDatabase ,FirebaseObjectObservable} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import md5 from 'crypto-md5'; // dependencies:"crypto-md5"

@IonicPage()
@Component({
  selector: 'page-after-login',
  templateUrl: 'after-login.html'
})
export class AfterLoginPage {

    email: any;
    profilePicture: any = "https://www.gravatar.com/avatar/"
    profileArray : any=[]; 
    profile: FirebaseObjectObservable<any[]>;
    uid:any;

  constructor(public navCtrl: NavController, public authData: AuthData,public alertCtrl: AlertController,public loadingCtrl: LoadingController,private toastCtrl: ToastController, public database: AngularFireDatabase, public auth:AngularFireAuth ) {
    
  }
  ionViewWillLoad(){
      this.auth.authState.subscribe(auth => {
        if(auth) {
          this.uid = auth.uid;     
          this.email = auth.email;
          this.profilePicture = "https://www.gravatar.com/avatar/" + md5(this.email.toLowerCase(), 'hex');

          let loadingPopup = this.loadingCtrl.create({
            spinner: 'crescent', 
            content: ''
          });
          loadingPopup.present();

          this.profile = this.database.object('/userProfile/'+this.uid );
          this.profile.subscribe(profile => {
              this.profileArray = profile;
              loadingPopup.dismiss()
          })

        } else {
          console.log('auth false');
          this.navCtrl.setRoot('LoginPage');
        }

      });
  }

  logout(){
        this.authData.logoutUser()
        .then( authData => {
          console.log("Logged out");
          // toast message
          this.presentToast('bottom','You are now logged out');
        }, error => {
          var errorMessage: string = error.message;
          console.log(errorMessage);
          //this.presentAlert(errorMessage);
        });
  }

  presentAlert(title) {
    let alert = this.alertCtrl.create({
      title: title,
      buttons: ['OK']
    });
    alert.present();
  }

  presentToast(position: string,message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      position: position,
      duration: 3000
    });
    toast.present();
  }

}
