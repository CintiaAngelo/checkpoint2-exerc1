import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-usuarios.component.html'
})
export class ListaUsuariosComponent {
  usuarios = [
    { nome: 'Ana', idade: 19 },
    { nome: 'Beto', idade: 27 }
  ];
}

