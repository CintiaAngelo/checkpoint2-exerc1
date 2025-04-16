import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-valor-switch',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './valor-switch.component.html',
})
export class ValorSwitchComponent {
  valor: number | string = 1; // valor inicial para teste
}

