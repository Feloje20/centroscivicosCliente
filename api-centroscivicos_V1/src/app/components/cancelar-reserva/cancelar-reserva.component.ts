import { Component } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cancelar-reserva',
  templateUrl: './cancelar-reserva.component.html',
  styleUrls: ['./cancelar-reserva.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CancelarReservaComponent {
  reservaId: number = 0;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private reservaService: ReservaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.reservaId = +params['id']; // Obtener el ID de la reserva desde la URL
    });
  }

  // Cancelar la reserva
  cancelarReserva(): void {
    this.reservaService.cancelarReserva(this.reservaId).subscribe({
      next: () => {
        this.successMessage = 'Reserva cancelada correctamente.';
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = 'Error al cancelar la reserva. ' + err.message;
        this.successMessage = '';
      }
    });
  }
}