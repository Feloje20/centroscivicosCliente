import { Component } from '@angular/core';
import { ReservaService } from '../../services/reserva.service'; // Servicio para crear la reserva
import { Router } from '@angular/router'; // Para redirigir después de crear la reserva
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-nueva-reserva',
  templateUrl: './nueva-reserva.component.html',
  styleUrls: ['./nueva-reserva.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Añadir CommonModule y FormsModule a los imports
})
export class NuevaReservaComponent {
  reserva = {
    id_instalacion: '1',
    nombre: '',
    telefono: '',
    fecha_inicio: '',
    fecha_final: '',
    estado: ''
  };

  constructor(
    private reservaService: ReservaService,
    private router: Router
  ) {}

  crearReserva() {
    // Si las fechas son solo 'YYYY-MM-DD', añadir la hora predeterminada '00:00:00'
    const fechaInicio = new Date(this.reserva.fecha_inicio);
    const fechaFinal = new Date(this.reserva.fecha_final);

    // Asegúrate de que las fechas sean válidas
    if (isNaN(fechaInicio.getTime()) || isNaN(fechaFinal.getTime())) {
      console.error('Las fechas no son válidas');
      return;
    }

    this.reserva.fecha_inicio = `${fechaInicio.getFullYear()}-${('0' + (fechaInicio.getMonth() + 1)).slice(-2)}-${('0' + fechaInicio.getDate()).slice(-2)} 00:00:00`;
    this.reserva.fecha_final = `${fechaFinal.getFullYear()}-${('0' + (fechaFinal.getMonth() + 1)).slice(-2)}-${('0' + fechaFinal.getDate()).slice(-2)} 00:00:00`;

    console.log(JSON.stringify(this.reserva, null, 2));

    // Enviar la reserva con las fechas completas
    this.reservaService.crearReserva(this.reserva).subscribe(() => {
      // Redirigir o mostrar mensaje de éxito
      this.router.navigate(['/reservas']);  // Volver a la vista de reservas
    });
  }
}
