import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CentroService } from '../../services/centro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instalacion-list',
  templateUrl: './instalacion-list.component.html',
  styleUrls: ['./instalacion-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class InstalacionListComponent implements OnInit {
  instalaciones: any[] = []; // Lista de instalaciones del centro
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(
    private centroService: CentroService,
    private route: ActivatedRoute  // Para obtener el id del centro
  ) {}

  ngOnInit(): void {
    // Obtener el id del centro desde la ruta
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getInstalaciones(id);
    }
  }

  // Obtener las instalaciones del centro por id
  getInstalaciones(id: string): void {
    this.centroService.getInstalacionesByCentroId(id).subscribe({
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