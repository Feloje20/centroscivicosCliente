import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importar RouterModule
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';  // Importar el servicio

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true
})
export class HeaderComponent {
  userName: string = '';
  userEmail: string = '';
  userPassword: string = ''; // Agregamos el campo de password
  
  constructor(
      public authService: AuthService,
      private router: Router
    ) {}

    ngOnInit(): void {
      const user = this.authService.getUserDetails();
      // Llamar a getUserEmail() solo una vez al inicio
      this.userEmail = user.email;
      this.userName = user.usuario;
    }

  // Método para manejar logout
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  // Método para manejar refresco de token
  refreshToken() {
    this.authService.refreshToken().subscribe(
      () => alert('Token refrescado con éxito'),
      () => alert('Error refrescando token')
    );
  }

}