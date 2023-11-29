import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ator-crud',
  standalone: false,
  templateUrl: './ator-crud.component.html',
  styleUrl: './ator-crud.component.scss'
})
export class AtorCrudComponent implements OnInit{

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
