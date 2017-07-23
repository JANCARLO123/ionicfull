import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController , LoadingController} from 'ionic-angular';
import { AngularFireDatabase , FirebaseListObservable} from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})

export class MapPage {
  mapList: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,public loadingCtrl: LoadingController, public database:AngularFireDatabase) {
      let loading = this.loadingCtrl.create({
        spinner: 'crescent',
        content: ''
      });
      loading.present();
      this.mapList = database.list('/map');
      this.mapList.subscribe(() => loading.dismiss());
         
  }


  showDetail(mapId) {
    let profileModal = this.modalCtrl.create('MapDetailPage', { 
        mapId: mapId
    });
    profileModal.present();
  }
  showMapMarker() {
    let profileModal2 = this.modalCtrl.create('MapMarkerPage');
    profileModal2.present();
  }

}
