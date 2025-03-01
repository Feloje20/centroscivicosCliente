import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Para acceder a los parámetros de la URL
import { CentroService } from '../../services/centro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-centro-detail',
  templateUrl: './centro-detail.component.html',
  styleUrls: ['./centro-detail.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CentroDetailComponent implements OnInit {
  centro: any = {}; // Guardaremos los detalles del centro aquí
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(
    private centroService: CentroService,
    private route: ActivatedRoute  // Para acceder al id del centro en la URL
  ) {}

  ngOnInit(): void {
    // Obtener el id del centro desde la ruta
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getCentro(id);
    }
  }

  // Método para obtener los detalles del centro por id
  getCentro(id: string): void {
    this.centroService.getCentroById(id).subscribe({
      next: (data) => {
        this.centro = data; // Asignamos la respuesta al centro
        this.isLoading = false; // Ya terminamos de cargar
      },
      error: (err) => {
        this.errorMessage = 'Error fetching centro details';
        this.isLoading = false; // Ya terminamos de cargar
        console.error(err);
      }
    });
  }
}
