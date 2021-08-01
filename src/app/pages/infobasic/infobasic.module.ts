import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfobasicPageRoutingModule } from './infobasic-routing.module';

import { InfobasicPage } from './infobasic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfobasicPageRoutingModule
  ],
  declarations: [InfobasicPage]
})
export class InfobasicPageModule {}
