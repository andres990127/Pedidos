import { Component, OnInit } from '@angular/core';
import { Pedido } from '../Models/pedidos';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   let pedido: Pedido = new Pedido();
   pedido.pedidoID = 1;
   pedido.clienteID = 1;
   pedido.nombreCliente = 'Juan';
   pedido.total = 1500;
   pedido.pedidoDetalle.push({
     productoID: 1,
     nombreProducto: 'Maiz',
     cantidad: 5,
     precio: 15,
     total: 75
   },
   {
    productoID: 2,
    nombreProducto: 'Agua',
    cantidad: 1,
    precio: 20,
    total: 20
  })

   console.log(pedido);
  } 
}
