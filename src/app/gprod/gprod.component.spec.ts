import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GprodComponent } from './gprod.component';

describe('GprodComponent', () => {
  let component: GprodComponent;
  let fixture: ComponentFixture<GprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
