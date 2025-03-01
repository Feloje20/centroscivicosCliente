import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadListCentroComponent } from './actividad-list-centro.component';

describe('ActividadListCentroComponent', () => {
  let component: ActividadListCentroComponent;
  let fixture: ComponentFixture<ActividadListCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadListCentroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadListCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
