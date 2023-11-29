import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-diretor-crud',
  standalone: false,
  templateUrl: './diretor-crud.component.html',
  styleUrl: './diretor-crud.component.scss'
})
export class DiretorCrudComponent implements OnInit{

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
