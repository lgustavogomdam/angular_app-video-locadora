import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AtorModel } from './ator-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AtorService {

  private baseUrl = 'http://localhost:8080/api/actor'; // Substitua pela sua URL real

  constructor(private http: HttpClient) {}

  // Função para buscar um ator por ID
  getAtor(id: number): Observable<AtorModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<AtorModel>(url);
  }

  // Função para buscar todos os atores
  getAllAtores(): Observable<AtorModel[]> {

    return this.http.get<AtorModel[]>(this.baseUrl);
  }

  // Função para criar um novo ator
  createAtor(ator: AtorModel): Observable<AtorModel> {
    return this.http.post<AtorModel>(this.baseUrl, ator);
  }

  // Função para atualizar um ator existente
  updateAtor(ator: AtorModel): Observable<AtorModel> {
    return this.http.put<AtorModel>(this.baseUrl, ator);
  }

  // Função para excluir um ator
  deleteAtor(id: number): Observable<string> {
    const url = `${this.baseUrl}/${id}`;
    // console.log('Entrou Aqui! ID:' + id);
    return this.http.delete(url, { responseType: 'text' });
  }

}
