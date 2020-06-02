import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //Se importan las rutas
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { InicioComponent } from './inicio/inicio.component';
import { GeneroComponent } from './genero/genero.component';


const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'genero/:id', component: GeneroComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' }, //A
  { path: '**', redirectTo: '/', pathMatch: 'full' } //B

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//el nombre routes viene de la constante de arriba
  exports: [RouterModule]
})
export class AppRoutingModule { }


//A: cuando no haya una ruta, el componente por defecto será inicio y para todas las coincidencias (pathMatch)
//B: cualquier ruta que sea desconocida ('**') va a redirigir a la pagina de inicio