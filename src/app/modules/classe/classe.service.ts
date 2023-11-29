import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClasseModel } from './classe-model';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private baseUrl = 'http://localhost:8080/api/class'; // Substitua pela sua URL real

  constructor(private http: HttpClient) {}

  // Função para buscar uma classe por ID
  getClasse(id: number): Observable<ClasseModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ClasseModel>(url);
  }

  // Função para buscar todos os atores
  getAllClasses(): Observable<ClasseModel[]> {
    return this.http.get<ClasseModel[]>(this.baseUrl);
  }

  // Função para criar uma nova classe
  createClasse(classe: ClasseModel): Observable<ClasseModel> {
    console.log('Create Class JSON:')
    console.log(JSON.stringify(classe))
    return this.http.post<ClasseModel>(this.baseUrl, classe);
  }

  // Função para atualizar uma classe existente
  updateClasse(classe: ClasseModel): Observable<ClasseModel> {
    const url = `${this.baseUrl}`;
    return this.http.put<ClasseModel>(url, classe);
  }

  // Função para excluir uma classe
  deleteClasse(id: number): Observable<string> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url, { responseType: 'text' });
  }
}
