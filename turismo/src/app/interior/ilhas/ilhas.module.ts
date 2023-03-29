import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlhasPageRoutingModule } from './ilhas-routing.module';

import { IlhasPage } from './ilhas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlhasPageRoutingModule
  ],
  declarations: [IlhasPage]
})
export class IlhasPageModule {}
