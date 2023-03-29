import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaimPage } from './taim.page';

const routes: Routes = [
  {
    path: '',
    component: TaimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaimPageRoutingModule {}
