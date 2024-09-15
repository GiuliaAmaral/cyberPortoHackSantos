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
  progressoIntervalo: string = '1';


  constructor(
    private apiService: ApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const shelf = this;
    this.buscarNavios();
    setInterval(()=>{
      shelf.progressoIntervalo = String(Number(shelf.progressoIntervalo)+1);
    }, 1000);
    setInterval(()=>{
      shelf.progressoIntervalo = '1';
      shelf.buscarNavios();
    }, 100000.2);
  }

  buscarNavios() {
    document.dispatchEvent(new CustomEvent('LOADING', { detail: true }));
    this.apiService.getNaviosProgramados().subscribe(naviosProgramados => {
      this.naviosProgramados = naviosProgramados.slice().reverse();
      this.naviosProgramadosBackup = naviosProgramados.slice().reverse();
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




