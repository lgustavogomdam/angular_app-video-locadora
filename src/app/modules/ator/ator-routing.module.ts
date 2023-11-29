import { AtorListarComponent } from './components/ator-listar/ator-listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtorCrudComponent } from './components/ator-crud/ator-crud.component';

const routes: Routes = [
  {path: '', component: AtorListarComponent},
  {path: 'cadastrar', component: AtorCrudComponent},
  {path: 'atualizar/:id', component: AtorCrudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtorRoutingModule { }
