import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Para acceder a los parámetros de la URL y para la navegación
import { CentroService } from '../../services/centro.service';
import { CommonModule } from '@angular/common';
import { GuardaIdsService } from '../../services/guarda-ids.service';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common'; // Importamos Location
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-actividad-list-all',
  templateUrl: './actividad-list-all.component.html',
  styleUrls: ['./actividad-list-all.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [AuthService]
})
export class ActividadListAllComponent implements OnInit {
  actividades: any[] = []; // Lista de todas las actividades
  errorMessage: string = '';
  isLoading: boolean = true;
  searchQuery: string = '';
  filteredActividades: any[] = [];

  constructor(
    private centroService: CentroService,
    private guardaIdsService: GuardaIdsService,
    public authService: AuthService,
    private route: ActivatedRoute,  // Para acceder al id del centro en la URL
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getActividades();
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

  inscribirse(idActividad: number) {
    // Guardar el id de la actividad en el servicio
    this.guardaIdsService.setIdActividad(idActividad);
    // Redirigir a la vista de inscripción
    this.router.navigate(['/inscripcion']);
  }

  // Método para ir a la página anterior
  goBack(): void {
    this.location.back();  // Vuelve a la página anterior
  }

  filtrarActividades(): void {
    if (this.searchQuery.trim() === '') {
      // Si no hay búsqueda, mostrar todas las actividades
      this.filteredActividades = this.actividades;
    } else {
      // Si hay un término de búsqueda, filtrar las actividades
      this.filteredActividades = this.actividades.filter((actividad) =>
        actividad.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
}