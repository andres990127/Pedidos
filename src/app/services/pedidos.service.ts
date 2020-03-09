import { Injectable } from '@angular/core';
import { Pedido } from '../Models/pedidos';
import { Productos } from '../Models/productos';
import { PedidoDetalle } from '../Models/pedido-detalle';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedido: Pedido = new Pedido();
  constructor() { }
}
