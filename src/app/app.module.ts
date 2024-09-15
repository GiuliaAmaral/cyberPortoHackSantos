import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardNavioComponent } from './components/card-navio/card-navio.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms'; // Importar aqui

import { HttpClientModule } from '@angular/common/http';
import { AtracacoesProgramadasComponent } from './pages/atracacoes-programadas/atracacoes-programadas.component';
import { CardCategoriasComponent } from './components/card-categorias/card-categorias.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ModalDetalhamentoComponent } from './components/modal-detalhamento/modal-detalhamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    NavbarComponent,
    CardNavioComponent,
    CardCategoriasComponent,
    ModalComponent,
    AtracacoesProgramadasComponent,
    LoadingComponent,
    ModalDetalhamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatGridListModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
