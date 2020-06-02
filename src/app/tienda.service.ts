import { Injectable } from '@angular/core';
import { ProductosComponent } from './productos/productos.component';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  //Crear los productos que habrá en la tienda
  genero:any=[] = [

    {
    nombre:'Naranjas',
    precio: 10,
    procedencia:'Valencia '
    },
    {
    nombre: 'Tomates',
    precio: 20,
    procedencia: 'Extremadura'
    }

  ]

  constructor() { }

  //Para poder llevar nuestro género a la zona de productos
  obtenerGenero(){
    return this.genero; //funcion que devuelve el género
  }

  obtenerId(i){
    return this.genero[i]; //para devolver cada elemento del género
  }

}
