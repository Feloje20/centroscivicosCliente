import { Component, OnInit } from '@angular/core';
import { CentroService } from '../../services/centro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actividad-list-all',
  templateUrl: './actividad-list-all.component.html',
  styleUrls: ['./actividad-list-all.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ActividadListAllComponent implements OnInit {
  actividades: any[] = []; // Lista de todas las actividades
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private centroService: CentroService) {}

  ngOnInit(): void {
    this.getActividades();
  }

  // Obtener todas las actividades
  getActividades(): void {
    this.centroService.getActividades().subscribe({
      next: (data) => {
        this.actividades = data; // Asignamos la respuesta a actividades
        this.isLoading = false; // Ya terminamos de cargar
      },
      error: (err) => {
        this.errorMessage = 'Error fetching actividades';
        this.isLoading = false; // Ya terminamos de cargar
        console.error(err);
      }
    });
  }
}