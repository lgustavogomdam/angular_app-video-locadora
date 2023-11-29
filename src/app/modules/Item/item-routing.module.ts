import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListarComponent } from './components/item-listar/item-listar.component';
import { ItemCrudComponent } from './components/item-crud/item-crud.component';

const routes: Routes = [
  {path: '', component: ItemListarComponent},
  {path: 'cadastrar', pathMatch: 'prefix', component: ItemCrudComponent},
  {path: 'atualizar/:id', pathMatch: 'prefix', component: ItemCrudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
