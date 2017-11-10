import { Component } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Account} from '../../models/account/account.interface'
import {ToastController} from 'ionic-angular'
/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  text: string;
  account = {} as Account

  constructor(private toast:ToastController,private ofAuth:AngularFireAuth) {
    
  }

 async register(){
  try  
  {const result = await this.ofAuth.auth.createUserWithEmailAndPassword(this.account.email,this.account.password);
    this.toast.create({
      message:"Account successfully created",
      duration:3000
    }).present();
    console.log(result);
  }
  catch(e){
    console.error(e)
    this.toast.create({
      message:e.message,
      duration:3000
    }).present();
    console.log(e)
  }
}

}
