import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasseService } from '../../classe.service';
import { Router } from '@angular/router';
import { ClasseModel } from '../../classe-model';

interface ElementoModel {
  id: number;
  nome: string;
  valor: number;
  data: Date
}

@Component({
  selector: 'app-classe-listar',
  standalone: false,
  templateUrl: './classe-listar.component.html',
  styleUrl: './classe-listar.component.scss'
})
export class ClasseListarComponent implements OnInit{

  //Atributos Tabela
  public displayedColumns: string[] = ['id', 'nome', 'valor', 'data', 'opcoes'];
  public dataSource!: ElementoModel[];
  public descriptionTable = "";

  //Services
  private service = inject(ClasseService);
  private router = inject(Router);

  constructor(){}

  onEdit(id: number) {
    this.router.navigate(['classe/atualizar', id]);
  }

  onDelete(id: number){
    if(confirm(`Você deseja deletar o elemento de ID: ${id} ?`)){
      this.service.deleteClasse(id).subscribe(
        (response: string) =>{
          alert(response);
          this.carregarClasses();
        },
        (error: Error) => {
          alert("Ocorreu o seguinte erro ao deletar o elemento:\n" + error.message);
        }
      );
    }
  }

  carregarClasses(): void{
    this.service.getAllClasses().subscribe(
      (response: ClasseModel[]) => {
        this.dataSource = response?.map((classe: ClasseModel) => {
          console.info(classe.dataDevolucao);
          return {
            id: classe.id,
            nome: classe.nome,
            valor: classe.valor,
            data: classe.dataDevolucao
          };
        });
      },
      (error: Error) => {
        console.error('Ocorreu o seguinte erro ao buscar classes:', + error.message);
      },
      () => {
        console.info("Classes carregadas com sucesso!");
      }
    );
  }

  ngOnInit(): void{
    this.carregarClasses();
  }
}
