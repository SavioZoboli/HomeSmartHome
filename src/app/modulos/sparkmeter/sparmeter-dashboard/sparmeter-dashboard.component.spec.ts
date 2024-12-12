import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparmeterDashboardComponent } from './sparmeter-dashboard.component';

describe('SparmeterDashboardComponent', () => {
  let component: SparmeterDashboardComponent;
  let fixture: ComponentFixture<SparmeterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SparmeterDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SparmeterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
