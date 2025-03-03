import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../services/reserva.service'; // Importa el servicio de reservas
import { Router } from '@angular/router'; // Para la navegación si es necesario
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  // Importar RouterModule
import { Location } from '@angular/common'; // Importamos Location


@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule ]
})
export class MisReservasComponent implements OnInit {
  reservas: any[] = [];  // Array donde se almacenarán las reservas
  errorMessage: string = '';  // Propiedad para almacenar el mensaje de error

  constructor(
    private reservaService: ReservaService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.cargarMisReservas();
  }

  cargarMisReservas() {
    this.reservaService.obtenerReservas().subscribe(
      (data: any[]) => {
        console.log(data);
        this.reservas = data;
      },
      (error) => {
        this.errorMessage = 'Hubo un error al cargar las reservas'; // Aquí se maneja el error
      }
    );
  }

  cancelarReserva(id: number) {
    this.reservaService.cancelarReserva(id).subscribe(
      (response) => {
        // Si la cancelación es exitosa, recargamos las reservas
        this.cargarMisReservas();
      },
      (error) => {
        this.errorMessage = 'Hubo un error al cancelar la reserva';
      }
    );
  }

  // Método para ir a la página anterior
  goBack(): void {
    this.location.back();  // Vuelve a la página anterior
  }
}