import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NaviosCategorias } from 'src/app/model/navios-categorias.model';

@Component({
  selector: 'app-card-categorias',
  templateUrl: './card-categorias.component.html',
  styleUrls: ['./card-categorias.component.css'],
})
export class CardCategoriasComponent implements OnInit {

  @Input() categoria!: NaviosCategorias;


  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

}
