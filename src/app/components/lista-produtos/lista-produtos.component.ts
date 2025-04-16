import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ProdutosComponent {
  produtos = [
    { nome: 'Notebook', preco: 3000, promocao: true },
    { nome: 'Mouse', preco: 50, promocao: false }
  ];
}
