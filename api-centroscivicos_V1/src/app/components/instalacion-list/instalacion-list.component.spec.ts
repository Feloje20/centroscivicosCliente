import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionListComponent } from './instalacion-list.component';

describe('InstalacionListComponent', () => {
  let component: InstalacionListComponent;
  let fixture: ComponentFixture<InstalacionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstalacionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstalacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
