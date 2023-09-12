import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindYourUsernamePage } from './find-your-username.page';

const routes: Routes = [
  {
    path: '',
    component: FindYourUsernamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindYourUsernamePageRoutingModule {}
