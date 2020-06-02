import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../tienda.service'; //importamos el servicio de tienda a productos

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  //relleno el array de género con el genero que he obtenido de la función obtenerGenero()
  //genero:any[]=[];
  genero = [];

  
  constructor(private servicio:TiendaService) {  //instancias el servicio
    this.genero = servicio.obtenerGenero(); //A través del sercicio podré obtener mi género
    
  } 


  ngOnInit(): void {
  }

}
