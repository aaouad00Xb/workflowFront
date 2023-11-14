import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSoutraitantComponent } from './add-soutraitant.component';

describe('AddSoutraitantComponent', () => {
  let component: AddSoutraitantComponent;
  let fixture: ComponentFixture<AddSoutraitantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSoutraitantComponent]
    });
    fixture = TestBed.createComponent(AddSoutraitantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
