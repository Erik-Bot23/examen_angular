import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Usuarios } from '../interface/usuarios';
import { UsuarioService } from '../service/usuario-service.service';


@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  private usuarioService = inject(UsuarioService)
  usuarios: Usuarios[] = [];

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe({
      next: (data) => this.usuarios = data,
      error: (err) => console.error('Error', err)

    })
  }
}
