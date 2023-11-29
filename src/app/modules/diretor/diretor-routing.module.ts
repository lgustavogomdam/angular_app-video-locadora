import { NgModule } from '@angular/core';
import { DiretorListarComponent } from './components/diretor-listar/diretor-listar.component';
import { RouterModule, Routes } from '@angular/router';
import { DiretorCrudComponent } from './components/diretor-crud/diretor-crud.component';

const routes: Routes = [
  {path: '', component: DiretorListarComponent},
  {path: 'cadastrar', pathMatch: 'prefix', component: DiretorCrudComponent},
  {path: 'atualizar/:id', pathMatch: 'prefix', component: DiretorCrudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiretorRoutingModule { }
