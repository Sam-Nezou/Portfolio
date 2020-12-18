import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColIconComponent } from "./ColIconComponent";

describe('ColIconComponent', () => {
  let component: ColIconComponent;
  let fixture: ComponentFixture<ColIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
