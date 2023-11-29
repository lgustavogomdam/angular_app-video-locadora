import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../../shared/material/material.module';
import { ClasseRoutingModule } from './classe-routing.module';
import { ClasseListarComponent } from './components/classe-listar/classe-listar.component';
import { ClasseCrudComponent } from './components/classe-crud/classe-crud.component';
import { ClasseUpdateComponent } from './components/classe-update/classe-update.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    ClasseListarComponent,
    ClasseCrudComponent,
    ClasseUpdateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ClasseRoutingModule,
    HttpClientModule
  ],
  exports: [
    ClasseListarComponent,
    ClasseCrudComponent,
    ClasseUpdateComponent
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }]
})
export class ClasseModule {}
