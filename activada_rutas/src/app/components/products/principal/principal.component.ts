import { Component } from '@angular/core';
import { produts } from 'src/app/utils/products';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  PRODUCTOS: any = produts;
}
