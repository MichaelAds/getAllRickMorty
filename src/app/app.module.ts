import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonagensComponent } from './pages/personagens/personagens.component';
import { MatCardModule } from '@angular/material/card';
import { AppRoutes } from './app.routing';
import { CaracteristicaPersonagemComponent } from './pages/caracteristica-personagem/caracteristica-personagem.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonagensComponent,
    CaracteristicaPersonagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    MatCardModule,
    BrowserAnimationsModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
