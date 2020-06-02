import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { InicioComponent } from './inicio/inicio.component';
import { GeneroComponent } from './genero/genero.component';

//Servicio de tienda
import { TiendaService } from './tienda.service';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    ContactoComponent,
    NosotrosComponent,
    ProductosComponent,
    InicioComponent,
    GeneroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [TiendaService], //proveedor de servicio
  bootstrap: [AppComponent]
})
export class AppModule { }
