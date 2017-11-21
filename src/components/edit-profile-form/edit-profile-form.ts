import { Component } from '@angular/core';
import {Profile} from '../../models/profile/profile.interface';

import {AuthService} from '../../providers/auth/auth.service';
import {DataService} from '../../providers/data/data.service';
/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent {

  profile = {} as Profile;

  constructor(private auth:AuthService,private data: DataService) {
 
  }
  async saveProfile(){
    const result = await this.data.saveProfile
  }
}
