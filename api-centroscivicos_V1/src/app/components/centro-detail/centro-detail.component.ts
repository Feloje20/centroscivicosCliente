import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Para acceder a los parámetros de la URL y para la navegación
import { CentroService } from '../../services/centro.service';
import { CommonModule } from '@angular/common';
import { GuardaIdsService } from '../../services/guarda-ids.service';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common'; // Importamos Location

@Component({
  selector: 'app-centro-detail',
  templateUrl: './centro-detail.component.html',
  styleUrls: ['./centro-detail.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [AuthService]
})
export class CentroDetailComponent implements OnInit {
  centro: any = {}; // Guardaremos los detalles del centro aquí
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(
    private centroService: CentroService,
    private guardaIdsService: GuardaIdsService,
    public authService: AuthService,
    private route: ActivatedRoute,  // Para acceder al id del centro en la URL
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    // Obtener el id del centro desde la ruta
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getCentro(id);
    }
  }

  // Método para obtener los detalles del centro por id
  getCentro(id: string): void {
    this.centroService.getCentroById(id).subscribe({
      next: (data) => {
        this.centro = data; // Asignamos la respuesta al centro
        this.isLoading = false; // Ya terminamos de cargar
      },
      error: (err) => {
        this.errorMessage = 'Error fetching centro details';
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

  reservar(idInstalacion: number) {
    // Guardar el id de la instalación en el servicio
    this.guardaIdsService.setIdInstalacion(idInstalacion);
    // Redirigir a la vista de reserva
    this.router.navigate(['/reserva']);
  }

  // Método para ir a la página anterior
  goBack(): void {
    this.location.back();  // Vuelve a la página anterior
  }
}
