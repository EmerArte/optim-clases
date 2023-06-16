import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetallesComponent } from './product-detalles.component';

describe('ProductDetallesComponent', () => {
  let component: ProductDetallesComponent;
  let fixture: ComponentFixture<ProductDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetallesComponent]
    });
    fixture = TestBed.createComponent(ProductDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
