import { Component } from '@angular/core';
import { ReservaService } from '../../services/reserva.service'; // Servicio para crear la reserva
import { Router } from '@angular/router'; // Para redirigir después de crear la reserva
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { GuardaIdsService } from '../../services/guarda-ids.service';
import { Location } from '@angular/common'; // Importamos Location
import { CentroService } from '../../services/centro.service';

@Component({
  selector: 'app-nueva-reserva',
  templateUrl: './nueva-reserva.component.html',
  styleUrls: ['./nueva-reserva.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Añadir CommonModule y FormsModule a los imports
})
export class NuevaReservaComponent {
  reserva = {
    id_instalacion: '',
    nombre: '',
    telefono: '',
    fecha_inicio: '',
    fecha_final: '',
    estado: 'pendiente'
  };
  idInstalacion: number | null = null;
  nombreInstalacion = "";
  nombreCentro = '';

  constructor(
    private reservaService: ReservaService,
    private guardaIdsService: GuardaIdsService,
    private location: Location, // Inyectamos Location
    private router: Router,
    private centroService: CentroService,
  ) {
    // Obtener el id de la instalación desde el servicio
    this.idInstalacion = this.guardaIdsService.getIdInstalacion();
    if (this.idInstalacion) {
      this.reserva.id_instalacion = this.idInstalacion.toString();
    }

    // Obtenemos el nombre de la instalacion y el centro
    // Primero recuperamos todas las instalacion y guardamos la info de la correcta
    // Además recuperamos el nombre del centro de la instalacion
    this.centroService.getInstalaciones().subscribe((data) => {
      for (let instalacion of data) {
        if (instalacion.id === this.idInstalacion) {
          this.nombreInstalacion = instalacion.nombre;
          this.centroService.getCentroById(instalacion
            .id_centro).subscribe((data) => {
            this.nombreCentro = data.nombre;
          });
        }
      }
    });
  }

  crearReserva() {
    // Enviar la reserva con las fechas completas
    this.reservaService.crearReserva(this.reserva).subscribe(() => {
      // Redirigir o mostrar mensaje de éxito
      this.router.navigate(['/reservas']);  // Volver a la vista de reservas
    });
  }

  // Método para ir a la página anterior
  goBack(): void {
    this.location.back();  // Vuelve a la página anterior
  }
}
