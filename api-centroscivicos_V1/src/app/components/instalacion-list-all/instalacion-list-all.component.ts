import { Component, OnInit } from '@angular/core';
import { CentroService } from '../../services/centro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instalacion-list-all',
  templateUrl: './instalacion-list-all.component.html',
  styleUrls: ['./instalacion-list-all.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class InstalacionListAllComponent implements OnInit {
  instalaciones: any[] = []; // Lista de todas las instalaciones
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private centroService: CentroService) {}

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
}
