import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NaviosProgramados } from 'src/app/model/navios-programados.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-atracacoes-programadas',
  templateUrl: './atracacoes-programadas.component.html',
  styleUrls: ['./atracacoes-programadas.component.css']
})
export class AtracacoesProgramadasComponent implements OnInit {

  naviosProgramados: NaviosProgramados[] = [];

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.apiService.getNaviosProgramados().subscribe(naviosProgramados => {
      this.naviosProgramados = naviosProgramados;
    })
  }

}
