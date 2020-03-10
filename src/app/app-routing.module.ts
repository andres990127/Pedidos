import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { HomeComponent } from './home/home.component';
import { AgregarClientesComponent } from './agregar-clientes/agregar-clientes.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ListadoPedidosComponent } from './listado-pedidos/listado-pedidos.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent // Path = '' significa que es la pagina que primero se cargará
  },
  {
    path: 'productos', component: ProductosComponent
  },
  {
    path: 'pedidos', component: PedidosComponent
  },
  {
    path: 'agregar-Clientes', component: AgregarClientesComponent
  },
  {
    path: 'agregar-productos', component: AgregarProductosComponent
  },
  {
    path: 'listado-pedidos', component: ListadoPedidosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
