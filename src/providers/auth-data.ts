import { Injectable } from '@angular/core';
import { AngularFireDatabase, } from 'angularfire2/database';
import { AngularFireAuth,AngularFireAuthModule } from 'angularfire2/auth';
import firebase from 'firebase';

@Injectable()
export class AuthData {
  fireAuth: any;
  authState: any;

  constructor(public database: AngularFireDatabase, public afAuth :AngularFireAuth) {
  }

  loginUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(newEmail,newPassword).then()
  
  }

  resetPassword(email: string): firebase.Promise<any> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): firebase.Promise<any> {
    return this.afAuth.auth.signOut();
  }
  
  registerUser(name: string, email: string, password: string,phone: number): firebase.Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password).then((newUser) => {
      firebase.database().ref('/userProfile').child(newUser.uid).set({
          email: email,
          name: name,
          phone: phone
      });
    });
  }

}

