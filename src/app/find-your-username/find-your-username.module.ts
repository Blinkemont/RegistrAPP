import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindYourUsernamePageRoutingModule } from './find-your-username-routing.module';

import { FindYourUsernamePage } from './find-your-username.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindYourUsernamePageRoutingModule
  ],
  declarations: [FindYourUsernamePage]
})
export class FindYourUsernamePageModule {}
