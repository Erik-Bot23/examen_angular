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
    apellidoMaterno: string;
    nombreUsuario: string;
    nacimiento: string;
    edad: number;
    domicilio: Domicilio;
}

