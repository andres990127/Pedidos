import { Injectable } from '@angular/core';
import { Pedido } from '../Models/pedidos';
import { Productos } from '../Models/productos';
import { PedidoDetalle } from '../Models/pedido-detalle';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedido: Pedido = new Pedido();
  constructor() { 
    this.pedido = this.ultimoPedido;
  }

  guardarLocalStorage(){
    localStorage.setItem("ultimoPedido", JSON.stringify(this.pedido))
  }

  get ultimoPedido(): Pedido
  {
    let pedidoDeLocalStorage: Pedido = new Pedido(JSON.parse(localStorage.getItem("ultimoPedido")));

    if (pedidoDeLocalStorage == null)
    {
      return new Pedido();
    }
    else{
      return pedidoDeLocalStorage
    }
  }

}
