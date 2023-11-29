import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-titulo-crud',
  standalone: false,
  templateUrl: './titulo-crud.component.html',
  styleUrl: './titulo-crud.component.scss'
})
export class TituloCrudComponent implements OnInit{

  public operacaoUpdate: boolean = false;

  //IoC
  private activatedRoute = inject(ActivatedRoute);

  constructor(){}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');

      if(id)
        this.operacaoUpdate = true;
    });
  }
}
