import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeDoctorsComponent } from './see-doctors.component';

describe('SeeDoctorsComponent', () => {
  let component: SeeDoctorsComponent;
  let fixture: ComponentFixture<SeeDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeeDoctorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeeDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
