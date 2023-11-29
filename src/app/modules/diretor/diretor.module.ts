import { DiretorRoutingModule } from './diretor-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../../shared/material/material.module';
import { DiretorListarComponent } from './components/diretor-listar/diretor-listar.component';
import { DiretorCrudComponent } from './components/diretor-crud/diretor-crud.component';
import { DiretorUpdateComponent } from './components/diretor-update/diretor-update.component';


@NgModule({
  declarations: [
    DiretorListarComponent,
    DiretorCrudComponent,
    DiretorUpdateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    DiretorRoutingModule
  ],
  exports: [
    DiretorListarComponent,
    DiretorCrudComponent,
    DiretorUpdateComponent
  ]
})
export class DiretorModule { }
