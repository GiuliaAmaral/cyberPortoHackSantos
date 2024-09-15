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
    document.dispatchEvent(new CustomEvent('LOADING', { detail: true }));
    this.apiService.getNaviosCategorias().subscribe(naviosCategoria => {
      this.naviosCategoria = naviosCategoria;
        document.dispatchEvent(new CustomEvent('LOADING', { detail: false }));
    })
  }

}
