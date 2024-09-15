import { Component, OnInit } from '@angular/core';
import { Atracagem } from 'src/app/model/atracagem.model';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  atracagens: Atracagem[] = [];

  constructor(
    private atracagemService: ApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.atracagemService.getAtracagens().subscribe(atracagens => {
      this.atracagens = atracagens;
      console.log(this.atracagens);
    });
  }

  public openDialog(): void {
    this.dialog.open(ModalComponent);
  }

}
