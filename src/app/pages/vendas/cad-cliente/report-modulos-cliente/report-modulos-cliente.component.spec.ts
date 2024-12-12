import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportModulosClienteComponent } from './report-modulos-cliente.component';

describe('ReportModulosClienteComponent', () => {
  let component: ReportModulosClienteComponent;
  let fixture: ComponentFixture<ReportModulosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportModulosClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportModulosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
