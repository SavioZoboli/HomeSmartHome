import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfyhomeDashboardComponent } from './comfyhome-dashboard.component';

describe('ComfyhomeDashboardComponent', () => {
  let component: ComfyhomeDashboardComponent;
  let fixture: ComponentFixture<ComfyhomeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComfyhomeDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComfyhomeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
