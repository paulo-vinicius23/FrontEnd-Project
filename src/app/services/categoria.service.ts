import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaModel } from '../move/models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getAllCategorias(){
    return this.http.get<CategoriaModel[]>('api/todas-categorias');
  }

  getCategoriaById(id: number){
    return this.http.get<CategoriaModel>('api/categoria/' + id);
  }

  salvarCategoria(categoria: CategoriaModel){
    const token = localStorage.getItem('login') || '';
    const headers = new HttpHeaders().append('Authorization', token)
    return this.http.post<CategoriaModel>('api/salvar-categoria', categoria, {headers});
  }

  deletarCategoria(id: number){
    const token = localStorage.getItem('login') || '';
    const headers = new HttpHeaders().append('Authorization', token)
    return this.http.post<any>('api/delete-categoria/' + id, {headers});
  }
}