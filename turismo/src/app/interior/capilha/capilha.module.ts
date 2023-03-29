import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapilhaPageRoutingModule } from './capilha-routing.module';

import { CapilhaPage } from './capilha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapilhaPageRoutingModule
  ],
  declarations: [CapilhaPage]
})
export class CapilhaPageModule {}
