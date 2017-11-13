import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {Account} from '../../models/account/account.interface';
import {LoginResponse} from '../../models/login/login-response.interface';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  text: string;

  account = {} as Account;
  @Output() loginStatus: EventEmitter<any>;
  constructor(private afAuth:AngularFireAuth,private navCtrl:NavController) {
    this.loginStatus = new EventEmitter<LoginResponse>();
   
  }

  async login(){
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(this.account.email,this.account.password);
      this.loginStatus.emit(result);
    } catch (e) {
      console.error(e);
      this.loginStatus.emit(e);
    }
  }
  navigateToPage(pageName:string){
    
     pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName)
   }

}
