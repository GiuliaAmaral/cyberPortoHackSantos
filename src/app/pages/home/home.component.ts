import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Atracagem } from 'src/app/model/atracagem.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  atracagens: Atracagem[] = [];


  constructor(
    public dialog: MatDialog,
    private atracagemService: ApiService,

  ) { }

  ngOnInit(): void {

    this.atracagemService.getAtracagens().subscribe(atracagens => {
      this.atracagens = atracagens;
      console.log(this.atracagens);
    });

  
    
  }



}
