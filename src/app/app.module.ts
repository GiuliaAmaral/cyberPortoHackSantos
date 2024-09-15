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

import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AtracacoesProgramadasComponent } from './pages/atracacoes-programadas/atracacoes-programadas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    NavbarComponent,
    CardNavioComponent,
    ModalComponent,
    AtracacoesProgramadasComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
