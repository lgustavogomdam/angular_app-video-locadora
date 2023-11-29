import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../../shared/material/material.module';
import { TituloRoutingModule } from './titulo-routing.module';
import { TituloListarComponent } from './components/titulo-listar/titulo-listar.component';
import { TituloCrudComponent } from './components/titulo-crud/titulo-crud.component';
import { TituloUpdateComponent } from './components/titulo-update/titulo-update.component';

@NgModule({
  declarations: [
    TituloListarComponent,
    TituloCrudComponent,
    TituloUpdateComponent
  ],
  imports: [
    CommonModule,
    TituloRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    TituloListarComponent,
    TituloCrudComponent,
    TituloUpdateComponent
  ]
})
export class TituloModule { }
