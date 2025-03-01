import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Necesario para *ngIf
import { FormsModule } from '@angular/forms'; // Necesario para [(ngModel)]

@Component({
  selector: 'app-usuario-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario-login.component.html',
  styleUrl: './usuario-login.component.css'
})
export class UsuarioLoginComponent {
  email = '';
  password = '';
  errorMessage = ''; // Mensaje de error

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (response: any) => {
        // Imprimir la respuesta completa del servidor
        console.log('Respuesta del servidor:', response);

        // Guardar el token en localStorage
        this.authService.saveToken(response.jwt); // Asegúrate de usar `jwt`
        // Redirigir a la página principal (descomentar)
        // this.router.navigate(['/contactos']);
      },
      error: (error: any) => {
        // Mostrar el mensaje de error
        this.errorMessage = error?.error?.message || 'Credenciales incorrectas';
        console.error('Error de login', error);
      }
    });
  }
}
