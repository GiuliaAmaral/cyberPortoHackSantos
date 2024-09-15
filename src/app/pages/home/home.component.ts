import { Component, OnInit } from '@angular/core';
import { NaviosCategorias } from 'src/app/model/navios-categorias.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  naviosCategoria: NaviosCategorias[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getNaviosCategorias().subscribe(naviosCategoria => {
      this.naviosCategoria = naviosCategoria.map(categoria => {
        return {
            ...categoria,
            icon: this.getIconByTipo(categoria.tipo)
        };
    });
    console.log('Navios Categorias com ícones', this.naviosCategoria);
    })
  }

  getIconByTipo(tipo: string): string {
    switch (tipo) {
      case 'CARGUEIRO COMUM':
        return 'fa-solid fa-ship';
      case 'EMBARCACAO DE APOIO':
        return 'fa-solid fa-handshake-angle';
      case 'GRANELEIRO':
        return 'fa-solid fa-wheat-awn';
      case 'OCEANOGRAFICO':
        return 'fa-solid fa-water';
      case 'OUTROS':
        return 'fa-solid fa-bars';
      case 'PESQUEIRO':
        return 'fa-solid fa-fish-fins';
      case 'PETROLEIRO':
        return 'fa-solid fa-oil-well';
      case 'PORTA-CONTAINERS':
        return 'fa-solid fa-boxes-stacked';
      case 'TANQUE':
        return 'fa-solid fa-bucket';
      default:
        return 'fa-solid fa-question';
    }
  }

}
