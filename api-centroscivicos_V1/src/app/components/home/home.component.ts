import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';  // Importar el servicio
import { RouterModule } from '@angular/router';  // Importar RouterModule
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importar FormsModule
import { CentroService } from '../../services/centro.service';

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
  userPassword: string = ''; 
  centros: any[] = [];
  instalaciones: any[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';
  searchQuery: string = '';
  filteredInstalaciones: any[] = [];
  actividades: any[] = []; // Lista de todas las actividades
  filteredActividades: any[] = [];

  constructor(
    public authService: AuthService,
    private router: Router,
    private centroService: CentroService
  ) {}

  ngOnInit(): void {
    this.getInstalaciones();
    this.getCentros();
    this.getActividades();

    // Llamar a getUserEmail() solo una vez al inicio
    const user = this.authService.getUserDetails();
    this.userEmail = user.email;
    this.userName = user.usuario;
  }

  // Método para recuperar la info de los centros
  getCentros(): void {
    this.centroService.getCentros().subscribe({
      next: (data) => {
        this.centros = data;
      },
      error: (err) => {
        this.errorMessage = 'Error fetching centros data';
        console.error(err);
      }
    });
  }

  // Obtener todas las instalaciones
  getInstalaciones(): void {
    this.centroService.getInstalaciones().subscribe({
      next: (data) => {
        this.instalaciones = data; // Asignamos la respuesta a instalaciones
        this.filteredInstalaciones = [...this.instalaciones]; // Asignamos a filteredActividades después de cargar
        this.isLoading = false; // Ya terminamos de cargar
      },
      error: (err) => {
        this.errorMessage = 'Error fetching instalaciones';
        this.isLoading = false; // Ya terminamos de cargar
        console.error(err);
      }
    });
  }

  // Obtener todas las actividades
  getActividades(): void {
    this.centroService.getActividades().subscribe({
      next: (data) => {
        this.actividades = data; // Asignamos la respuesta a actividades
        this.filteredActividades = [...this.actividades]; // Asignamos a filteredActividades después de cargar
        this.isLoading = false; // Ya terminamos de cargar
      },
      error: (err) => {
        this.errorMessage = 'Error fetching actividades';
        this.isLoading = false; // Ya terminamos de cargar
        console.error(err);
      }
    });
  }

   // Función para obtener el nombre del centro correspondiente al id_centro
   getCentroName(idCentro: number): string {
    const centro = this.centros.find(c => c.id === idCentro);
    return centro ? centro.nombre : 'Centro no encontrado';
  }
}
