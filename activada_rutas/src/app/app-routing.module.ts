import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetallesComponent } from './components/products/product-detalles/product-detalles.component';
import { PrincipalComponent } from './components/products/principal/principal.component';

const routes: Routes = [
  {
    path:"products",
    component: PrincipalComponent
  },
  {
    path:"products/detalles/:idProduto",
    component: ProductDetallesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
