import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'educacion',
    loadChildren: () => import('./pages/educacion/educacion.module').then( m => m.EducacionPageModule)
  },
  {
    path: 'references',
    loadChildren: () => import('./pages/references/references.module').then( m => m.ReferencesPageModule)
  },
  {
    path: 'infobasic',
    loadChildren: () => import('./pages/infobasic/infobasic.module').then( m => m.InfobasicPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
