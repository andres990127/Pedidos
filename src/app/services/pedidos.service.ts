import { Injectable } from '@angular/core';
import { Pedido } from '../Models/pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedido: Pedido = new Pedido();
  constructor() { }
}
