import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilmeModel } from '../move/models/filme.model';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http: HttpClient) { }

  getAllFilmes(){
    return this.http.get<FilmeModel[]>('api/todos-filmes');
  }

  getFilmeById(id: number){
    return this.http.get<FilmeModel>('api/filme-id/' + id);
  }

  getFilmeByName(filme: string){
    return this.http.get<FilmeModel[]>('api/filme-nome/' + filme);
  }

  getFilmeByCategoria(id: number){
    return this.http.get<FilmeModel[]>('api/filme-categoria/' + id);
  }

  salvarFilme(filme: FilmeModel){
    const token = localStorage.getItem('login') || '';
    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.post<FilmeModel>('api/salvar-filme', filme, {headers});
  }

  deletarFilme(id: number){
    const token = localStorage.getItem('login') || '';
    const headers = new HttpHeaders().append('Authorization', token)
    return this.http.post<any>('api/delete-filme/' + id, {headers});
  }
}
