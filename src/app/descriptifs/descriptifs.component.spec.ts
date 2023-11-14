import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptifsComponent } from './descriptifs.component';

describe('DescriptifsComponent', () => {
  let component: DescriptifsComponent;
  let fixture: ComponentFixture<DescriptifsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptifsComponent]
    });
    fixture = TestBed.createComponent(DescriptifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
