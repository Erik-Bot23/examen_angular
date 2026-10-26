import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Rutas } from "../../entorno/rutas";
import { Observable } from "rxjs";

export interface Domicilio{
    calle: string;
    numeroExterior: string;
    numeroInterior: string;
    colonia: string;
    codigoPostal: string;
    ciudad: string;
}

export interface Usuarios {
    id?: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: String;
    nombreUsuario: string;
    fechaNacimiento: string;
    edad: number;
    domicilio: Domicilio;
}

@Injectable({ providedIn: 'root' })
export class UsuarioService {
    private http = inject(HttpClient);
    private url = Rutas.apiLocal;

    getUsuarios(): Observable<Usuarios[]>{
        return this.http.get<Usuarios[]>(this.url);
    }
}
