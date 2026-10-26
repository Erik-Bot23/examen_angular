import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Usuarios } from '../interface/usuarios';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  usuarios: Usuarios[] = [];
}
