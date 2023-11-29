import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../../shared/material/material.module';
import { ItemRoutingModule } from './item-routing.module';
import { ItemListarComponent } from './components/item-listar/item-listar.component';
import { ItemCrudComponent } from './components/item-crud/item-crud.component';
import { ItemUpdateComponent } from './components/item-update/item-update.component';


@NgModule({
  declarations: [
    ItemListarComponent,
    ItemCrudComponent,
    ItemUpdateComponent
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ItemListarComponent,
    ItemCrudComponent,
    ItemUpdateComponent
  ]
})
export class ItemModule { }
