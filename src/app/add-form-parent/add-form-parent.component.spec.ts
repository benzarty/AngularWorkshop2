import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormParentComponent } from './add-form-parent.component';

describe('AddFormParentComponent', () => {
  let component: AddFormParentComponent;
  let fixture: ComponentFixture<AddFormParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
