import { Component  } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,LoadingController } from 'ionic-angular';
import { AngularFireDatabase , FirebaseListObservable} from 'angularfire2/database';
import 'rxjs/add/operator/map'; // you might need to import this, or not depends on your setup



@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html'
})
export class TimelinePage {
  timeline: FirebaseListObservable<any[]>;
  feedView: string = "activity";

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController ,public modalCtrl: ModalController,  public database:AngularFireDatabase) {
      let loadingPopup = this.loadingCtrl.create({
        spinner: 'crescent',
        content: ''
      });
      loadingPopup.present();
      this.timeline = <FirebaseListObservable<any[]>> database.list('/timeline').map((timeline) => {
          return timeline.map((timeline) => {
              timeline.lists =   database.list('/timeline/'+timeline.$key+'/lists')  
              loadingPopup.dismiss().catch(() => console.log('ERROR CATCH: LoadingController dismiss'));
              return timeline            
          })        
      })
  }



}
