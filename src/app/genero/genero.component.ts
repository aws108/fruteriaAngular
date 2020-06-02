import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //hará que lea la ruta y así podremos tratarla 
import { TiendaService } from '../tienda.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {

  //genero:any[] = []; //Lo llenaremos de //B
  genero = [];
  
  constructor(
    private ruta:ActivatedRoute,
    private servicio:TiendaService
    ) { 
    this.ruta.params.subscribe(parametro=>{
      console.log(parametro['id'])
      this.genero = this.servicio.obtenerId(parametro['id']) //B
    }); //A

  }

  

  ngOnInit(): void {
  }

}

/* 

A: Con ruta adquirimos la URL, con params se lee la URL y subscribe es para 'subscribirla'. 
Con el console.log se comprueba que el id funciona (en la consola del navegador aparece: Array(0)) 

B: capturas la información del servicio de un sólo objecto. Cada elemento de la lista de elementos del género
*/