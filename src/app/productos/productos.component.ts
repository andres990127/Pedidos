import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Productos } from '../Models/productos';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: Array<Productos> = new Array <Productos>();
  constructor(public productosServicio: ProductosService,  public pedidosServicio: PedidosService) { }

  ngOnInit() {
    this.productos = this.productosServicio.productosLocalStorage
  }

  buscarProductos(nombreBuscar){
    this.productos = this.productosServicio.productosLocalStorage.filter(producto=>{
      return producto.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase())
    })
  }

}
