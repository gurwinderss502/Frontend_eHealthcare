import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointSuccessComponent } from './appoint-success.component';

describe('AppointSuccessComponent', () => {
  let component: AppointSuccessComponent;
  let fixture: ComponentFixture<AppointSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
