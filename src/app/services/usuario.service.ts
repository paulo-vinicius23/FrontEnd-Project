import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../move/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarioById(id: number){
    const token = localStorage.getItem('login') || '';
    const headers = new HttpHeaders().append('Authorization', token)
    return this.http.get<UsuarioModel>('api/usuario/' + id, {headers});
  }

  getAllUsuarios(){
    const token = localStorage.getItem('login') || '';
    const headers = new HttpHeaders().append('Authorization', token)
    return this.http.get<UsuarioModel[]>('api/todos-usuarios', {headers});
  }

  salvarUsuario(usuario: UsuarioModel){
    const token = localStorage.getItem('login') || '';
    const headers = new HttpHeaders().append('Authorization', token)
    return this.http.post<UsuarioModel>('api/salvar-usuario', usuario, {headers});
  }

  deletarUsuario(id: number){
    const token = localStorage.getItem('login') || '';
    const headers = new HttpHeaders().append('Authorization', token)
    return this.http.post<any>('api/delete-usuario/' + id, {headers});

  }
}
