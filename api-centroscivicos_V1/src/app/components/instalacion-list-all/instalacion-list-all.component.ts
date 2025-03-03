import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Para acceder a los parámetros de la URL y para la navegación
import { CentroService } from '../../services/centro.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { GuardaIdsService } from '../../services/guarda-ids.service';
import { Location } from '@angular/common'; // Importamos Location

@Component({
  selector: 'app-instalacion-list-all',
  templateUrl: './instalacion-list-all.component.html',
  styleUrls: ['./instalacion-list-all.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [AuthService]
})
export class InstalacionListAllComponent implements OnInit {
  instalaciones: any[] = []; // Lista de todas las instalaciones
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(
    private centroService: CentroService,
    public authService: AuthService,
    private guardaIdsService: GuardaIdsService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getInstalaciones();
  }

  // Obtener todas las instalaciones
  getInstalaciones(): void {
    this.centroService.getInstalaciones().subscribe({
      next: (data) => {
        this.instalaciones = data; // Asignamos la respuesta a instalaciones
        this.isLoading = false; // Ya terminamos de cargar
      },
      error: (err) => {
        this.errorMessage = 'Error fetching instalaciones';
        this.isLoading = false; // Ya terminamos de cargar
        console.error(err);
      }
    });
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
