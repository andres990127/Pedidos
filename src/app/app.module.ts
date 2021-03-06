import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { HomeComponent } from './home/home.component';
import { AgregarClientesComponent } from './agregar-clientes/agregar-clientes.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms' /* Escribimos este Manualmente */
import { ClientesService } from './services/clientes.service';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ProductosService } from './services/productos.service';
import { PedidosService } from './services/pedidos.service';
import { ListadoPedidosComponent } from './listado-pedidos/listado-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ClientesComponent,
    ProductosComponent,
    PedidosComponent,
    HomeComponent,
    AgregarClientesComponent,
    AgregarProductosComponent,
    ListadoPedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, /* Escribimos e importamos este Manualmente */
    FormsModule /* Escribimos e importamos este Manualmente */
  ],
  providers: [
    ClientesService, /* Escribimos e importamos este Manualmente */
    ProductosService, /* Escribimos e importamos este Manualmente */
    PedidosService /* Escribimos e importamos este Manualmente */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
