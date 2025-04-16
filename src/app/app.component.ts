import { Component } from '@angular/core';
import { MesSwitchComponent } from './components/mes-switch/mes-switch.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';
import { VerificaIdadeComponent } from './components/verifica-idade/verifica-idade.component';
import { TarefasComponent } from './components/tarefas/tarefas.component'; 
import { StatusPedidoComponent } from './components/status-pedido/status-pedido.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { ValorSwitchComponent } from './components/valor-switch/valor-switch.component';
import { LoginComponent } from './components/login/login.component';
import { ProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MesSwitchComponent,
    ListaComprasComponent,
    VerificaIdadeComponent,
    TarefasComponent,
    StatusPedidoComponent,
    ListaUsuariosComponent,
    ValorSwitchComponent,
    LoginComponent,
    ProdutosComponent,
    FormsModule,
    CalculadoraComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
