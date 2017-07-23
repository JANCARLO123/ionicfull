import { Component  } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController , LoadingController} from 'ionic-angular';
import { AngularFireDatabase , FirebaseListObservable} from 'angularfire2/database';
import 'rxjs/add/operator/map'; // you might need to import this, or not depends on your setup

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})

export class FeedPage {

  feeds: FirebaseListObservable<any[]>;
  feedView: string = "activity";

  constructor(public navCtrl: NavController, public navParams: NavParams ,public modalCtrl: ModalController,public loadingCtrl: LoadingController,  public database:AngularFireDatabase ) {
 
    let loadingPopup = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'new loading'
    });
    loadingPopup.present();
    this.feeds = <FirebaseListObservable<any[]>> database.list('/feed').map((feeds) => {
          return feeds.map((feeds) => {
              feeds.images =   database.list('/feed/'+feeds.$key+'/images')
              loadingPopup.dismiss().catch(() => console.log('ERROR CATCH: LoadingController dismiss'));
              return feeds                      
          })
     
      })
    
  }


}
