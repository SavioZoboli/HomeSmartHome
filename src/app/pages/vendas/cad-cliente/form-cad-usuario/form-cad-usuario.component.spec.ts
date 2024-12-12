import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadUsuarioComponent } from './form-cad-usuario.component';

describe('FormCadUsuarioComponent', () => {
  let component: FormCadUsuarioComponent;
  let fixture: ComponentFixture<FormCadUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCadUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCadUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
