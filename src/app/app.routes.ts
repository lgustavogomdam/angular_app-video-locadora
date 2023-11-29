import { NotFoundComponent } from './modules/not-found/not-found.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'diretor',
    loadChildren: ()=> import('./modules/diretor/diretor.module').then(m => m.DiretorModule)
  },
  {
    path: 'ator',
    loadChildren: ()=> import("./modules/ator/ator.module").then(m => m.AtorModule)
  },

  {
    path: 'classe',
    loadChildren: ()=> import("./modules/classe/classe.module").then(m => m.ClasseModule)
  },


  {
    path: 'item',
    loadChildren: ()=> import("./modules/Item/item.module").then(m => m.ItemModule)
  },

  {
    path: 'titulo',
    loadChildren: ()=> import("./modules/titulo/titulo.module").then(m => m.TituloModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: '**',
    component: NotFoundComponent
  },

];
