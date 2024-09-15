import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NaviosCategorias } from 'src/app/model/navios-categorias.model';
import { NaviosProgramados } from 'src/app/model/navios-programados.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  naviosProgramados: NaviosProgramados[] = [];
  naviosCategoria: NaviosCategorias[] = [];

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.apiService.getNaviosProgramados().subscribe(naviosProgramados => {
      this.naviosProgramados = naviosProgramados;
      console.log(this.naviosProgramados);
    });

    this.apiService.getNaviosCategorias().subscribe(naviosCategoria => {
      this.naviosCategoria = naviosCategoria;
      console.log('Navios Categorias', this.naviosCategoria);
    })
 }
}
