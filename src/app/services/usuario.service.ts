import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 private URL='https://reqres.in/api'
  constructor(private http:HttpClient) { }
  getUser(){
    return this.http.get(`${this.URL}/users?per_page=6delay=100`).pipe(
      map(resp=> resp['data']
      )
      );
  }
  getUserById(id:string){
    return this.http.get(`${this.URL}/users/${id}`).pipe(
      map(resp=> resp['data']
      )
      );
  }
}
