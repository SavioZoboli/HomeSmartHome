import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodlockDashboardComponent } from './goodlock-dashboard.component';

describe('GoodlockDashboardComponent', () => {
  let component: GoodlockDashboardComponent;
  let fixture: ComponentFixture<GoodlockDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoodlockDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoodlockDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
