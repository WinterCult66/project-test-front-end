import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherandsonComponent } from './fatherandson.component';

describe('FatherandsonComponent', () => {
  let component: FatherandsonComponent;
  let fixture: ComponentFixture<FatherandsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherandsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherandsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
