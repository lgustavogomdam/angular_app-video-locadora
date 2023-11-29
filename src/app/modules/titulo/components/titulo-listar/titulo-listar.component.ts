import { Component, OnInit, inject } from '@angular/core';
import { AtorModel } from '../../../ator/ator-model';
import { ClasseModel } from '../../../classe/classe-model';
import { DiretorModel } from '../../../diretor/diretor-model';
import { TituloService } from '../../titulo.service';
import { Router } from '@angular/router';
import { TituloModel } from '../../titulo-model';

interface ElementoModel {
  id: number;
  nome: string;
  ano: number;
  categoria: string;
  sinopse: string;
  ator?: AtorModel;
  diretor?: DiretorModel;
  classe?: ClasseModel;
}

@Component({
  selector: 'app-titulo-listar',
  standalone: false,
  templateUrl: './titulo-listar.component.html',
  styleUrl: './titulo-listar.component.scss'
})
export class TituloListarComponent implements OnInit{

  //Atributos Tabela
  public displayedColumns: string[] = ['id', 'nome', 'ano', 'categoria', 'ator', 'diretor', 'classe', 'opcoes'];
  public dataSource!: ElementoModel[];
  public descriptionTable = "";

  //Services
  private service = inject(TituloService);
  private router = inject(Router);

  constructor(){}

  onEdit(id: number) {
    this.router.navigate(['titulo/atualizar', id]);
  }

  onDelete(id: number){
    if(confirm(`Você deseja deletar o elemento de ID: ${id} ?`)){
      this.service.deleteTitulo(id).subscribe(
        (response: string) =>{
          alert(response);
          this.carregarTitulos();
        },
        (error: Error) => {
          alert("Ocorreu o seguinte erro ao deletar o elemento:\n" + error.message);
        }
      )
    }
  }

  carregarTitulos(): void{
    this.service.getAllTitulos().subscribe(
      (response: TituloModel[]) => {
        // TODO: Verificar erro do idTitle
        this.dataSource = response.map((titulo: TituloModel) => {
          return {
            id: titulo.id,
            nome: titulo.nome,
            ano: titulo.ano,
            categoria: titulo.categoria,
            sinopse: titulo.sinopse,
            ator: titulo.actor,
            diretor: titulo.director,
            classe: titulo.classe
          };
        });
      },
      (error: Error) => {
        console.error('Ocorreu o seguinte erro ao buscar Titulos:', + error.message);
      },
      () => {
        console.info("Titulos carregados com sucesso!");
      }
    );
  }

  ngOnInit(): void{
    this.carregarTitulos();
  }
}
