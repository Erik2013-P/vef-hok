import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeptunComponent } from './neptun.component';

describe('NeptunComponent', () => {
  let component: NeptunComponent;
  let fixture: ComponentFixture<NeptunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeptunComponent]
    });
    fixture = TestBed.createComponent(NeptunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
