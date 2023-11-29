import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-crud',
  standalone: false,
  templateUrl: './item-crud.component.html',
  styleUrl: './item-crud.component.scss'
})
export class ItemCrudComponent implements OnInit{

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
