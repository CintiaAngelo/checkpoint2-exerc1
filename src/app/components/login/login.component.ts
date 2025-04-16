import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  status: 'vazio' | 'invalido' | 'sucesso' | null = null;

  validarLogin() {
    if (!this.email || !this.senha) {
      this.status = 'vazio';
    } else if (!this.email.includes('@') || this.senha.length < 6) {
      this.status = 'invalido';
    } else {
      this.status = 'sucesso';
    }
  }
}


