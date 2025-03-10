import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioLoginComponent } from './usuario-login.component';

describe('UsuarioLoginComponent', () => {
  let component: UsuarioLoginComponent;
  let fixture: ComponentFixture<UsuarioLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
