import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Rutas } from '../../entorno/rutas';
import { Observable } from 'rxjs';
import { Usuarios } from '../interface/usuarios';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private http = inject(HttpClient);
  private url = Rutas.apiLocal;

  getUsuarios(): Observable<Usuarios[]>{
      return this.http.get<Usuarios[]>(this.url);
  }
}