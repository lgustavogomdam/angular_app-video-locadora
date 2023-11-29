import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TituloListarComponent } from './components/titulo-listar/titulo-listar.component';
import { TituloCrudComponent } from './components/titulo-crud/titulo-crud.component';

const routes: Routes = [
  {path: '', component: TituloListarComponent},
  {path: 'cadastrar', pathMatch: 'prefix', component: TituloCrudComponent},
  {path: 'atualizar/:id',pathMatch: 'prefix', component: TituloCrudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TituloRoutingModule { }
