import { Component, inject, OnInit } from '@angular/core';
import { DiretorService } from '../../diretor.service';
import { DiretorModel } from '../../diretor-model';
import { Router } from '@angular/router';

interface ElementoModel {
  id: number;
  primeiroNome: string;
  ultimoNome: string;
}

@Component({
  selector: 'app-diretor-listar',
  standalone: false,
  templateUrl: './diretor-listar.component.html',
  styleUrl: './diretor-listar.component.scss'
})
export class DiretorListarComponent implements OnInit{

    //Atributos Tabela
    public displayedColumns: string[] = ['id', 'primeiroNome', 'ultimoNome', 'opcoes'];
    public dataSource!: ElementoModel[];
    public descriptionTable = "";

    //Services
    private service = inject(DiretorService);
    private router = inject(Router);

    constructor(){}

    onEdit(id: number) {
      this.router.navigate(['diretor/atualizar', id]);
    }

    onDelete(id: number){
      if(confirm(`Você deseja deletar o elemento de ID: ${id} ?`)){
        this.service.deleteDiretor(id).subscribe(
          (response: string) =>{
            alert(response);
            this.carregarDiretores();
          },
          (error: Error) => {
            alert("Ocorreu o seguinte erro ao deletar o elemento:\n" + error.message);
          }
        ).unsubscribe;
      }
    }

    carregarDiretores(): void{
      this.service.getAllDiretores().subscribe(
        (response: DiretorModel[]) => {
          this.dataSource = response?.map((diretor: DiretorModel) => {
            return {
              id: diretor.id,
              primeiroNome: diretor.primeiroNome,
              ultimoNome: diretor.ultimoNome
            };
          });
        },
        (error: Error) => {
          console.error('Ocorreu o seguinte erro ao buscar Diretores:', + error.message);
        },
        () => {
          console.info("Diretores carregados com sucesso!");
        }
      ).unsubscribe;
    }

    ngOnInit(): void{
      this.carregarDiretores();
    }
}
