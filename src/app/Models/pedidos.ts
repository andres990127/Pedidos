import { PedidoDetalle } from './pedido-detalle';

export class Pedido
{
    pedidoID: number;
    clienteID: number;
    nombreCliente: string;
    total: number;
    pedidoDetalle: Array<PedidoDetalle>

    constructor(){
        this.pedidoID = this.pedidoID
        this.clienteID = this.clienteID
        this.nombreCliente = this.nombreCliente
        this.total = this.total
        this.pedidoDetalle = new Array<PedidoDetalle>();
    }
}