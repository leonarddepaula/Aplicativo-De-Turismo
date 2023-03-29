import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapilhaPage } from './capilha.page';

const routes: Routes = [
  {
    path: '',
    component: CapilhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapilhaPageRoutingModule {}
