import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloModel } from '../../../titulo/titulo-model';
import { ItemService } from '../../item.service';
import { Router } from '@angular/router';
import { ItemModel } from '../../item-model';
import { Console } from 'console';

interface ElementoModel {
  id: number;
  numero_serie: number;
  data_aquisicao: Date;
  tipo_item: string;
  titulo: TituloModel;
}

@Component({
  selector: 'app-item-listar',
  standalone: false,
  templateUrl: './item-listar.component.html',
  styleUrl: './item-listar.component.scss'
})
export class ItemListarComponent implements OnInit{

  //Atributos Tabela
  public displayedColumns: string[] = ['id', 'numero_serie', 'data_aquisicao', 'tipo_item', 'titulo', 'opcoes'];
  public dataSource!: ElementoModel[];
  public descriptionTable = "";

  //Services
  private service = inject(ItemService);
  private router = inject(Router);

  constructor(){}

  onEdit(id: number) {
    this.router.navigate(['item/atualizar', id]);
  }

  onDelete(id: number){
    if(confirm(`Você deseja deletar o elemento de ID: ${id} ?`)){
      this.service.deleteItem(id).subscribe(
        (response: string) =>{
          alert(response);
          this.carregarItems();
        },
        (error: Error) => {
          alert("Ocorreu o seguinte erro ao deletar o elemento:\n" + error.message);
        }
      )
    }
  }

  carregarItems(): void{
    this.service.getAllItems().subscribe(
      (response: ItemModel[]) => {
        this.dataSource = response?.map((item: ItemModel) => {
          return {
            id: item.id,
            numero_serie: item.numero_de_serie,
            data_aquisicao: item.data_aquisicao,
            tipo_item: item.tipo_item,
            titulo: item.titulo
          };
        });
      },
      (error: Error) => {
        console.error('Ocorreu o seguinte erro ao buscar Itens:', + error.message);
      },
      () => {
        console.info("Itens carregados com sucesso!");
      }
    );
  }

  ngOnInit(): void{
    this.carregarItems();
  }
}
