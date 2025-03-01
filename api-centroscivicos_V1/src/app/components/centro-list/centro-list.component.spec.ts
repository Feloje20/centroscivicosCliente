import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroListComponent } from './centro-list.component';

describe('CentroListComponent', () => {
  let component: CentroListComponent;
  let fixture: ComponentFixture<CentroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentroListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
