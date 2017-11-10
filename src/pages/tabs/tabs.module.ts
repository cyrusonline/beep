import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
// import { IboxPage } from '../ibox/ibox';

@NgModule({
  declarations: [
    TabsPage,
    // IboxPage
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ],
  entryComponents: [
    TabsPage,
    // IboxPage
    ],
})
export class TabsPageModule {}
