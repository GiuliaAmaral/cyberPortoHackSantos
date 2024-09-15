import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-modal-detalhamento',
  templateUrl: './modal-detalhamento.component.html',
  styleUrls: ['./modal-detalhamento.component.css']
})
export class ModalDetalhamentoComponent implements OnInit {
  @Input() navioDetalhe?: any;
  @Output() closeModal = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.navioDetalhe)
  }

  closeModalHandler(): void {
    this.closeModal.emit();
  }

}
