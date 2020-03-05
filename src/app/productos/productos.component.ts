import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Productos } from '../Models/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: Array<Productos> = new Array <Productos>();
  constructor(public productosServicio: ProductosService) { }

  ngOnInit() {
    this.productos = this.productosServicio.productosLocalStorage
  }

}
