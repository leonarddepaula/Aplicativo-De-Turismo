import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaimPageRoutingModule } from './taim-routing.module';

import { TaimPage } from './taim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaimPageRoutingModule
  ],
  declarations: [TaimPage]
})
export class TaimPageModule {}
