import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { NaviosProgramados } from 'src/app/model/navios-programados.model';

@Component({
  selector: 'app-card-navio',
  templateUrl: './card-navio.component.html',
  styleUrls: ['./card-navio.component.css'],
})
export class CardNavioComponent implements OnInit {
  
  @Input() navio?: NaviosProgramados;


  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public openDialog(): void {
    this.dialog.open(ModalComponent);
  }

}
