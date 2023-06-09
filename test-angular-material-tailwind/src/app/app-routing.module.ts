import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { PruebaRutaComponent } from './prueba-ruta/prueba-ruta.component';

const routes: Routes = [
  {
    path: 'prueba',
    component: PruebaRutaComponent,
    
  },
  {
    path: 'blog',
    component: BlogsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
