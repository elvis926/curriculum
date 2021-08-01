import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfobasicPage } from './infobasic.page';

const routes: Routes = [
  {
    path: '',
    component: InfobasicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfobasicPageRoutingModule {}
