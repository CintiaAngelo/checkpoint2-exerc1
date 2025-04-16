import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';  // Para o ngModel funcionar

@Component({
  selector: 'app-mes-switch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mes-switch.component.html',
  styleUrls: ['./mes-switch.component.css']
})
export class MesSwitchComponent {
  numeroMes: number = 1; // Valor inicial para o mês
}

