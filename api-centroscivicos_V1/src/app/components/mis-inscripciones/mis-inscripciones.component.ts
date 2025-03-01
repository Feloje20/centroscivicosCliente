import { Component, OnInit } from '@angular/core';
import { InscripcionService } from '../../services/inscripcion.service'; // Asegúrate de que el servicio esté correctamente importado
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-mis-inscripciones',
  templateUrl: './mis-inscripciones.component.html',
  styleUrls: ['./mis-inscripciones.component.css'],
  standalone: true,
    imports: [CommonModule, FormsModule]
})

export class MisInscripcionesComponent implements OnInit {
  inscripciones: any[] = []; // Aquí almacenaremos las inscripciones del usuario

  constructor(private inscripcionService: InscripcionService) {}

  ngOnInit(): void {
    this.obtenerInscripciones(); // Llamamos al método para obtener las inscripciones
  }

  obtenerInscripciones() {
    
    this.inscripcionService.obtenerInscripciones().subscribe({
      next: (response) => {
        this.inscripciones = response; // Asignamos las inscripciones al arreglo
      },
      error: (error) => {
        console.error('Error al obtener inscripciones', error);
      }
    });
  }

  eliminarInscripcion(id: number) {
    this.inscripcionService.eliminarInscripcion(id).subscribe({
      next: (response) => {
        // Si la eliminación es exitosa, eliminamos la inscripción del array
        this.inscripciones = this.inscripciones.filter(inscripcion => inscripcion.id !== id);
        console.log('Inscripción eliminada:', response);
      },
      error: (error) => {
        console.error('Error al eliminar inscripción', error);
      }
    });
  }
}
