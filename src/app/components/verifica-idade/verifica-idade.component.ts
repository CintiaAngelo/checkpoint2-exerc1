import { Component } from '@angular/core';


@Component({
  selector: 'app-verifica-idade',
  standalone: true,
  imports: [],
  templateUrl: './verifica-idade.component.html',
  styleUrl: './verifica-idade.component.css'
})
export class VerificaIdadeComponent {
  idade: number = 16;

  aumentar() {
    this.idade++;
  }

  diminuir() {
    if (this.idade > 0) this.idade--;
  }
}

