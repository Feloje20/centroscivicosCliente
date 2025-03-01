import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CentroService } from '../../services/centro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actividad-list-centro',
  templateUrl: './actividad-list-centro.component.html',
  styleUrls: ['./actividad-list-centro.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ActividadListCentroComponent implements OnInit {
  actividades: any[] = []; // Lista de actividades de un centro específico
  centroId: number = 0; // ID del centro
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(
    private centroService: CentroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.centroId = +params['id']; // Obtenemos el id del centro desde la URL
      this.getActividadesByCentro(this.centroId);
    });
  }

  // Obtener las actividades del centro
  getActividadesByCentro(centroId: number): void {
    this.centroService.getActividadesByCentro(centroId).subscribe({
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
