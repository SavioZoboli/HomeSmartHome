import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquahubDashboardComponent } from './aquahub-dashboard.component';

describe('AquahubDashboardComponent', () => {
  let component: AquahubDashboardComponent;
  let fixture: ComponentFixture<AquahubDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AquahubDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AquahubDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
