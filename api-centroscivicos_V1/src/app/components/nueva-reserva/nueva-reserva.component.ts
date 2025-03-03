import { Component } from '@angular/core';
import { ReservaService } from '../../services/reserva.service'; // Servicio para crear la reserva
import { Router } from '@angular/router'; // Para redirigir después de crear la reserva
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { GuardaIdsService } from '../../services/guarda-ids.service';
import { Location } from '@angular/common'; // Importamos Location

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

  constructor(
    private reservaService: ReservaService,
    private guardaIdsService: GuardaIdsService,
    private location: Location, // Inyectamos Location
    private router: Router
  ) {
    // Obtener el id de la instalación desde el servicio
    this.idInstalacion = this.guardaIdsService.getIdInstalacion();
    if (this.idInstalacion) {
      this.reserva.id_instalacion = this.idInstalacion.toString();
    }
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
