import { Injectable } from '@angular/core';
import { Observable, first, forkJoin, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TituloModel } from './titulo-model';
import { AtorService } from '../ator/ator.service';
import { DiretorService } from '../diretor/diretor.service';
import { ClasseService } from '../classe/classe.service';
import { subscribe } from 'diagnostics_channel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TituloService {

  private baseUrl = 'http://localhost:8080/api/title'; // Substitua pela sua URL real

  constructor(
    private http: HttpClient,
    private atorService: AtorService,
    private diretorService: DiretorService,
    private classeService: ClasseService) {}

  // Função para buscar um title por ID
  getTitulo(id: number): Observable<TituloModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<TituloModel>(url);
  }

  // Função para buscar todos os Titulos
  getAllTitulos(): Observable<TituloModel[]> {
    return this.http.get<TituloModel[]>(this.baseUrl);
  }

  getTitulosByName(searchTerm: string): Observable<TituloModel[]>{
    const url = `${this.baseUrl}/findTitles/${searchTerm}`
    return this.http.get<TituloModel[]>(url);
  }

  // Função para criar um novo Titulo
  createTitulo(titulo: TituloModel): Observable<TituloModel> {
    return this.http.post<TituloModel>(this.baseUrl, titulo);
  }

  // Função para atualizar um title existente
  updateTitulo(titulo: TituloModel): Observable<TituloModel> {
    return this.http.put<TituloModel>(this.baseUrl, titulo);
  }

  // Função para excluir um titulo
  deleteTitulo(id: number): Observable<string> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url, { responseType: 'text' });
  }

  formToModel(formValue: any): Observable<TituloModel> {
    const atorId = formValue.ator;
    const diretorId = formValue.diretor;
    const classeId = formValue.classe;

    return forkJoin([
      this.atorService.getAtor(atorId),
      this.diretorService.getDiretor(diretorId),
      this.classeService.getClasse(classeId)
    ]).pipe(
      map(([ator, diretor, classe]) => {
        // Cria um novo objeto TituloModel com os dados do formulário
        const titulo: TituloModel = {
          id: formValue.id,
          nome: formValue.nome,
          ano: formValue.ano,
          sinopse: formValue.sinopse,
          categoria: formValue.categoria,
          actor: ator,
          classe: classe,
          director: diretor
        }
        // console.log(titulo.ator)
        // console.log(titulo.diretor)
        // console.log(titulo.classe)

        return titulo;
      })
    );
  }
}
