import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./usuarios/usuarios.component').then(m=>m.UsuariosComponent) },
    { path: '**', redirectTo: '' }
];

export class AppRoutingModule{}