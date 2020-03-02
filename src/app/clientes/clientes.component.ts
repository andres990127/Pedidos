import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
interface Clientes {
  nombre: string;
  apellido: string;
  edad: number;
}

interface Productos {
  nombre: string;
  precio: number;
}
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  /* clientes: Array<Clientes> = new Array <Clientes>(); */
  /* productos: Array<Productos> = new Array <Productos>(); */
  constructor() { }

  ngOnInit() {
    /* this.clientes.push({
    nombre: "Carmen",
    apellido: "Najera",
    edad: 23
  },
  {
    nombre: "Alejandro",
    apellido: "Pineda",
    edad: 17
  }
  ) 

   this.productos.push({
    nombre: "Maiz",
    precio: 15
  },
  {
    nombre: "Agua en botella",
    precio: 20
  }
  )   */
  }

  guardarCliente() {
    let clientesAgregar: Array<Clientes> = new Array<Clientes>();
    clientesAgregar.push({
      nombre: "Maria",
      apellido: "Perez",
      edad: 10
    },
      {
        nombre: "Ana",
        apellido: "Martinez",
        edad: 25
      })
    localStorage.setItem("clientes", JSON.stringify(clientesAgregar)) //La llave se llama "clientes" y se manda el arreglo "clientes"
    //Solo se pueden mandar Strings, asi que por medio del JSON.stringify se convierte el arreglo de objetos a string
  }

  guardarProductos() {
    let productosAgregar: Array<Productos> = new Array<Productos>();
    productosAgregar.push({
      nombre: "Maiz",
      precio: 15
    },
      {
        nombre: "Agua en botella",
        precio: 20
      }
    )
    localStorage.setItem("productos", JSON.stringify(productosAgregar)) //La llave se llama "productos" y se manda el arreglo "productos"
    //Solo se pueden mandar Strings, asi que por medio del JSON.stringify se convierte el arreglo de objetos a string
  }

  /* leer()
  {
    this.clientes = JSON.parse(localStorage.getItem("clientes")) //Leo el local storage con la llave "clientes", me lo retorna en un string, asi que vuelvo a usar el JSON para convertirlo a arreglo y se lo asigno al array clientes
    this.productos = JSON.parse(localStorage.getItem("productos"))

  } */

  eliminarClientes() {
    localStorage.removeItem("clientes") //localStorage.removeItem borra todo lo asociado a la llave dada "clientes"
  }

  eliminarProductos() {
    localStorage.removeItem("productos") //localStorage.removeItem borra todo lo asociado a la llave dada "productos"
  }

  eliminarTodos() {
    localStorage.clear(); //localStorage.clear borra totalmente el localStorage
  }

  get ClientesLocales(): Clientes[] {
    let clientesLocalStorage: Clientes[] = JSON.parse(localStorage.getItem("clientes"))
    if (clientesLocalStorage == null) {
      return new Array<Clientes>();
    }
    return clientesLocalStorage
  }

  get ProductosLocales(): Productos[] {
    let productosLocalStorage: Productos[] = JSON.parse(localStorage.getItem("productos"))
    if (productosLocalStorage == null) {
      return new Array<Productos>();
    }
    return productosLocalStorage
  }
}
