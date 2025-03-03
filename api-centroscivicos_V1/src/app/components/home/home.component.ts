import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';  // Importar el servicio
import { RouterModule } from '@angular/router';  // Importar RouterModule
import { CommonModule } from '@angular/common';  // Importar CommonModule

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterModule]
})
export class HomeComponent implements OnInit{
  userEmail: string | null = null;

  constructor(public authService: AuthService) {}

  // Método para manejar logout
  logout() {
    this.authService.logout();
  }

  // Método para manejar refresco de token
  refreshToken() {
    this.authService.refreshToken().subscribe(
      () => alert('Token refrescado con éxito'),
      () => alert('Error refrescando token')
    );
  }

  ngOnInit(): void {
    // Llamar a getUserEmail() solo una vez al inicio
    this.userEmail = this.authService.getUserEmail();
  }
}
