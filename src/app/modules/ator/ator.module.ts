import { AtorListarComponent } from './components/ator-listar/ator-listar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../../shared/material/material.module';
import { AtorRoutingModule } from './ator-routing.module';
import { AtorCrudComponent } from './components/ator-crud/ator-crud.component';
import { AtorUpdateComponent } from './components/ator-update/ator-update.component';


@NgModule({
  declarations: [
    AtorListarComponent,
    AtorCrudComponent,
    AtorUpdateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AtorRoutingModule
  ],
  exports: [
    AtorListarComponent,
    AtorCrudComponent,
    AtorUpdateComponent
  ]
})
export class AtorModule { }
