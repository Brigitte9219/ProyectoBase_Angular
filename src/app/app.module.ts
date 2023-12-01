import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeradirectivaComponent } from './directivas/primeradirectiva/primeradirectiva.component';
import { HeadComponent } from './componentes/head/head.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeradirectivaComponent,
    HeadComponent,
    ContenidoComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
