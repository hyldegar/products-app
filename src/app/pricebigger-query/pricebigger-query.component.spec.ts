import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricebiggerQueryComponent } from './pricebigger-query.component';

describe('PricebiggerQueryComponent', () => {
  let component: PricebiggerQueryComponent;
  let fixture: ComponentFixture<PricebiggerQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricebiggerQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricebiggerQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
