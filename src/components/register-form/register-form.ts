import { Component, Output,EventEmitter} from '@angular/core';
import {AuthService} from '../../providers/auth/auth.service';
import {Account} from '../../models/account/account.interface';
import {LoginResponse} from '../../models/login/login-response.interface';
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
  @Output() registerStatus: EventEmitter<LoginResponse>; 
  constructor(private auth:AuthService) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }

 async register(){
  try  
  {
    const result = await this.auth.createUserWithEmailAndPassword(this.account);
    this.registerStatus.emit(result);
  }
  catch(e){
    console.error(e)
    this.registerStatus.emit(e);
  }
}

}
