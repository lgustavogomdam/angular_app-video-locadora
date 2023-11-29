import { TituloService } from './../titulo/titulo.service';
import { Observable, forkJoin, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ItemModel } from './item-model';
import { TituloModel } from '../titulo/titulo-model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl = 'http://localhost:8080/api/item'; // Substitua pela sua URL real

  private tituloService = inject(TituloService);

  constructor(private http: HttpClient) {}

  // Função para buscar um item por ID
  getItem(id: number): Observable<ItemModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ItemModel>(url);
  }

  // Função para buscar todos os Itens
  getAllItems(): Observable<ItemModel[]> {
    return this.http.get<ItemModel[]>(this.baseUrl);
  }

  // Função para criar um novo Item
  createItem(item: ItemModel): Observable<ItemModel> {
    console.log('Model aqui:')
    console.log(item)
    return this.http.post<ItemModel>(this.baseUrl, item);
  }

  // Função para atualizar um Item existente
  updateItem(item: ItemModel): Observable<ItemModel> {
    return this.http.put<ItemModel>(this.baseUrl, item);
  }

  // Função para excluir um Item
  deleteItem(id: number): Observable<string> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url, { responseType: 'text' });
  }


  formToModel(formValue: any): Observable<ItemModel> {
    return this.tituloService.getTitulo(formValue.titulo.id).pipe(
      map((titulo: TituloModel) => {
        // Cria um novo objeto TituloModel com os dados do formulário
        const item: ItemModel = {
          id: formValue.id,
          numero_de_serie: formValue.numero_de_serie,
          data_aquisicao: formValue.data_aquisicao,
          tipo_item: formValue.tipo_item,
          titulo: titulo
        };
        return item;
      })
    );
  }
}
