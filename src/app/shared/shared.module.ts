import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ArvoreMenuComponent } from './components/arvore-menu/arvore-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ArvoreMenuComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    MaterialModule,
    ArvoreMenuComponent
  ]
})
export class SharedModule { }
