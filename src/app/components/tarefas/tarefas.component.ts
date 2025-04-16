import { Component } from '@angular/core';


@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [],
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent {
  tarefas: string[] = ['Estudar Angular', 'Fazer exercícios', 'Revisar código'];

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }
}
