import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailsPageComponent } from './products-details-page.component';

describe('ProductsDetailsPageComponent', () => {
  let component: ProductsDetailsPageComponent;
  let fixture: ComponentFixture<ProductsDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
