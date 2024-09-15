import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NaviosCategorias } from 'src/app/model/navios-categorias.model';

@Component({
  selector: 'app-card-categorias',
  templateUrl: './card-categorias.component.html',
  styleUrls: ['./card-categorias.component.css'],
})
export class CardCategoriasComponent implements OnInit {

  @Input() categoria!: NaviosCategorias;
  @Output() closeModal = new EventEmitter<void>();

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  closeModalHandler(): void {
    this.closeModal.emit();
  }

}
