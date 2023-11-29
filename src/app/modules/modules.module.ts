import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AtorModule } from './ator/ator.module';
import { DiretorModule } from './diretor/diretor.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';



@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomeComponent,
    NotFoundComponent
  ]
})
export class ModulesModule { }
