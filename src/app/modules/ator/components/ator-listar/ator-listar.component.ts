import { Router } from '@angular/router';
import { AtorService } from '../../ator.service'
import { Component, OnInit, inject} from '@angular/core';
import { AtorModel } from '../../ator-model';

interface ElementoModel {
  id: number;
  primeiroNome: string;
  ultimoNome: string;
}

@Component({
  selector: 'app-ator-listar',
  standalone: false,
  templateUrl: './ator-listar.component.html',
  styleUrl: './ator-listar.component.scss'
})
export class AtorListarComponent implements OnInit{

  //Atributos Tabela
  public displayedColumns: string[] = ['id', 'primeiroNome', 'ultimoNome', 'opcoes'];
  public dataSource!: ElementoModel[];
  public descriptionTable = "";

  //Services
  private service = inject(AtorService);
  private router = inject(Router);

  constructor(){}

  onEdit(id: number) {
    this.router.navigate(['ator/atualizar', id]);
  }

  onDelete(id: number){
    if(confirm(`Você deseja deletar o elemento de ID: ${id} ?`)){
      this.service.deleteAtor(id).subscribe(
        (response: string) =>{
          alert(response);
          this.carregarAtores();
        },
        (error: Error) => {
          alert("Ocorreu o seguinte erro ao deletar o elemento:\n" + error.message);
        }
      )
    }
  }

  carregarAtores(): void{
    this.service.getAllAtores().subscribe(
      (response: AtorModel[]) => {
        this.dataSource = response?.map((ator: AtorModel) => {
          return {
            id: ator.id,
            primeiroNome: ator.primeiroNome,
            ultimoNome: ator.ultimoNome
          };
        });
      },
      (error: Error) => {
        console.error('Ocorreu o seguinte erro ao buscar Atores:', + error.message);
      },
      () => {
        console.info("Atores carregados com sucesso!");
      }
    );
  }

  ngOnInit(): void{
    this.carregarAtores();
  }
}
