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
  naviosProgramadosBackup: NaviosProgramados[] = [];

  shipName: string = '';

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    document.dispatchEvent(new CustomEvent('LOADING', { detail: true }));
    this.apiService.getNaviosProgramados().subscribe(naviosProgramados => {
      this.naviosProgramados = naviosProgramados;
      this.naviosProgramadosBackup = naviosProgramados;
      document.dispatchEvent(new CustomEvent('LOADING', { detail: false }));
    })
  }

  onChange(value: string) {
    this.shipName = value.toLowerCase();
    this.naviosProgramados = this.naviosProgramadosBackup.filter(navio =>
      navio.nomenavio.toLowerCase().includes(this.shipName) ||
      navio.viagem.toLowerCase().includes(this.shipName)
    );
  }
}




