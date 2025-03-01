import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionListAllComponent } from './instalacion-list-all.component';

describe('InstalacionListAllComponent', () => {
  let component: InstalacionListAllComponent;
  let fixture: ComponentFixture<InstalacionListAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstalacionListAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstalacionListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
