import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Clientes } from '../Models/clientes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clientes: Array<Clientes> = new Array<Clientes>();
  constructor(public clientesServicio: ClientesService) { }

  ngOnInit() {
    this.clientes = this.clientesServicio.clientesLocalStorage;
  }

  buscarClientes(nombreBuscar)
  {
    this.clientes = this.clientesServicio.clientesLocalStorage.filter(x=> {
      return x.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase())
    })
  } 

}
