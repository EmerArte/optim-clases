import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { produts } from 'src/app/utils/products';
@Component({
  selector: 'app-product-detalles',
  templateUrl: './product-detalles.component.html',
  styleUrls: ['./product-detalles.component.css']
})
export class ProductDetallesComponent {

  productoSeleccionado: any;
constructor(private route: ActivatedRoute){
  const idProducto = route.snapshot.paramMap.get('idProduto');
  this.productoSeleccionado = produts.find((value)=> value.id == Number(idProducto));
  console.log(this.productoSeleccionado);
  
}
}
