import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviFactureComponent } from './suivi-facture.component';

describe('SuiviFactureComponent', () => {
  let component: SuiviFactureComponent;
  let fixture: ComponentFixture<SuiviFactureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiviFactureComponent]
    });
    fixture = TestBed.createComponent(SuiviFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
