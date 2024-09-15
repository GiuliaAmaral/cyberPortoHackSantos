import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-modal-detalhamento',
  templateUrl: './modal-detalhamento.component.html',
  styleUrls: ['./modal-detalhamento.component.css']
})
export class ModalDetalhamentoComponent implements OnInit {

  exibirNaTela?:any;

  constructor() { }

  ngOnInit(): void {
    this.exibirNaTela = sessionStorage?.getItem("textoGeradoIA") || "";
    sessionStorage.removeItem("textoGeradoIA");
  }
}
