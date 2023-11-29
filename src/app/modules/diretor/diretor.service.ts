import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DiretorModel } from './diretor-model';


@Injectable({
  providedIn: 'root'
})
export class DiretorService {

  private baseUrl = 'http://localhost:8080/api/director'; // Substitua pela sua URL real

  constructor(private http: HttpClient) {}

  // Função para buscar um ator por ID
  getDiretor(id: number): Observable<DiretorModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<DiretorModel>(url);
  }

  // Função para buscar todos os atores
  getAllDiretores(): Observable<DiretorModel[]> {
    return this.http.get<DiretorModel[]>(this.baseUrl);
  }

  // Função para criar um novo Diretor
  createDiretor(diretor: DiretorModel): Observable<DiretorModel> {
    return this.http.post<DiretorModel>(this.baseUrl, diretor);
  }

  // Função para atualizar um Diretor existente
  updateDiretor(diretor: DiretorModel): Observable<DiretorModel> {
    return this.http.put<DiretorModel>(this.baseUrl, diretor);
  }

  // Função para excluir um Diretor
  deleteDiretor(id: number): Observable<string> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url, { responseType: 'text' });
  }
}
