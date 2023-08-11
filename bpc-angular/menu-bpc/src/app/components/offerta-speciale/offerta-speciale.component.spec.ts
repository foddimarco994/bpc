import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertaSpecialeComponent } from './offerta-speciale.component';

describe('OffertaSpecialeComponent', () => {
  let component: OffertaSpecialeComponent;
  let fixture: ComponentFixture<OffertaSpecialeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffertaSpecialeComponent]
    });
    fixture = TestBed.createComponent(OffertaSpecialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
