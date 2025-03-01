import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadListAllComponent } from './actividad-list-all.component';

describe('ActividadListAllComponent', () => {
  let component: ActividadListAllComponent;
  let fixture: ComponentFixture<ActividadListAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadListAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
