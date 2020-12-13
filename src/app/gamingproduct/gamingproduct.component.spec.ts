import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingproductComponent } from './gamingproduct.component';

describe('GamingproductComponent', () => {
  let component: GamingproductComponent;
  let fixture: ComponentFixture<GamingproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamingproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
