import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import { Pedido } from '../Models/pedidos';

@Component({
  selector: 'app-listado-pedidos',
  templateUrl: './listado-pedidos.component.html',
  styleUrls: ['./listado-pedidos.component.scss']
})
export class ListadoPedidosComponent implements OnInit {

  listadoPedidos: Pedido[] = new Array <Pedido>();
  constructor(public pedidosServicio: PedidosService) { }

  ngOnInit() {
    this.listadoPedidos = this.pedidosServicio.listadoPedidosLocalStorage;
  }

}
