import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeMedicinesComponent } from './see-medicines.component';

describe('SeeMedicinesComponent', () => {
  let component: SeeMedicinesComponent;
  let fixture: ComponentFixture<SeeMedicinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeeMedicinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeeMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
