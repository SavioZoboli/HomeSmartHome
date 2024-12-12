import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadClienteComponent } from './form-cad-cliente.component';

describe('FormCadClienteComponent', () => {
  let component: FormCadClienteComponent;
  let fixture: ComponentFixture<FormCadClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCadClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCadClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
