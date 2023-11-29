import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasseListarComponent } from './components/classe-listar/classe-listar.component';
import { ClasseCrudComponent } from './components/classe-crud/classe-crud.component';

const routes: Routes = [
  {path: '', component: ClasseListarComponent},
  {path: 'cadastrar', pathMatch: 'prefix', component: ClasseCrudComponent},
  {path: 'atualizar/:id', pathMatch: 'prefix', component: ClasseCrudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasseRoutingModule { }
