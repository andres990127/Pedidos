import { Component, OnInit } from '@angular/core';
import { Pedido } from '../Models/pedidos';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  constructor(public pedidosServicio: PedidosService) { }

  ngOnInit() {

  } 

  calcularTotal(posicion: number)
  {
    this.pedidosServicio.pedido.actualizadCantidades(posicion);
    this.pedidosServicio.guardarLocalStorage();
  }
}
