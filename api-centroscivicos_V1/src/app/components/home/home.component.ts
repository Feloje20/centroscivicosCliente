import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';  // Importar el servicio
import { RouterModule } from '@angular/router';  // Importar RouterModule
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importar FormsModule

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterModule, FormsModule]
})
export class HomeComponent implements OnInit{
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
  }

  // Método para manejar refresco de token
  refreshToken() {
    this.authService.refreshToken().subscribe(
      () => alert('Token refrescado con éxito'),
      () => alert('Error refrescando token')
    );
  }

  // Llamada al método para eliminar la cuenta
  eliminarCuenta(): void {
    if (confirm('¿Estás seguro de que deseas eliminar tu cuenta? Esta acción es irreversible.')) {
      this.authService.deleteAccount().subscribe({
        next: (response) => {
          this.authService.logout();
          console.log('Cuenta eliminada correctamente:', response);
          // Redirigir al usuario a la página de inicio o login después de eliminar la cuenta
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Error al eliminar la cuenta:', error);
        }
      });
    }
  }

  actualizarUsuario(): void {
    // Validación de campos
    if (!this.userName || !this.userEmail || !this.userPassword) {
      alert('Por favor, rellena todos los campos.');
      return;
    }

    const updatedUser = {
      usuario: this.userName,  // Cambiar 'name' por 'usuario'
      email: this.userEmail,
      password: this.userPassword
    };
  
    this.authService.updateUser(updatedUser).subscribe(
      (response) => {
        alert('Los datos se han actualizado correctamente.');
        // Redirigir o realizar alguna acción después de actualizar
      },
      (error) => {
        console.error('Error al actualizar el usuario:', error);
        alert('Hubo un problema al actualizar los datos. Inténtalo de nuevo más tarde.');
      }
    );
  }

  
}
