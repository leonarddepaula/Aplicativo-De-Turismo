import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'capilha',
    loadChildren: () => import('./interior/capilha/capilha.module').then( m => m.CapilhaPageModule)
  },
  {
    path: 'ilhas',
    loadChildren: () => import('./interior/ilhas/ilhas.module').then( m => m.IlhasPageModule)
  },
  {
    path: 'taim',
    loadChildren: () => import('./interior/taim/taim.module').then( m => m.TaimPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
