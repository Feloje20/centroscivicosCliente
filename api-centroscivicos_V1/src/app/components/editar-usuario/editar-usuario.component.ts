import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';  // Importar el servicio
import { RouterModule } from '@angular/router';  // Importar RouterModule
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importar FormsModule

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule]
})
export class EditarUsuarioComponent {
  userName: string = '';
  userEmail: string = '';
  userPassword: string = ''; 
  errorMessage: string = ''; // Mensaje de error

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const user = this.authService.getUserDetails();
    // Llamar a getUserEmail() solo una vez al inicio
    this.userEmail = user.email;
    this.userName = user.usuario;
    this.userPassword = user.userPassword;
  }

  actualizarUsuario(): void {
    // Validación de campos
    if (!this.userName || !this.userEmail || !this.userPassword) {
      alert('Por favor, rellena todos los campos.');
      return;
    }

    const updatedUser = {
      usuario: this.userName, 
      email: this.userEmail,
      password: this.userPassword
    };
  
    this.authService.updateUser(updatedUser).subscribe(
      (response) => {
        // Al actualizar los datos, deslogeamos al usuario
        this.authService.logout();

        // Redirigir al usuario a la página de inicio o login después de actualizar los datos
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error al actualizar el usuario:', error);
        alert('Hubo un problema al actualizar los datos. Inténtalo de nuevo más tarde.');
      }
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
}
