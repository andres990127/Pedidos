import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductosService } from '../services/productos.service';
import { Productos } from '../Models/productos';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.scss']
})
export class AgregarProductosComponent implements OnInit {

  constructor(private fb: FormBuilder, public productosServicio: ProductosService) { }
  formularioAgregar: FormGroup;
  ngOnInit() {
    this.formularioAgregar = this.fb.group({
      nombre:['', Validators.required],
      descripcion:['', Validators.required],
      precio:['', Validators.required]
    })
  }

  agregar()
  {
    this.productosServicio.agregarLocalStorage(this.formularioAgregar.value)
    this.formularioAgregar.reset();
  }
}
