import { Component } from '@angular/core';
import { InscripcionService } from '../../services/inscripcion.service'; // Servicio para crear la inscripción
import { Router } from '@angular/router'; // Para redirigir después de crear la inscripción
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-nueva-inscripcion',
  templateUrl: './nueva-inscripcion.component.html',
  styleUrls: ['./nueva-inscripcion.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Añadir CommonModule y FormsModule a los imports
})
export class NuevaInscripcionComponent {
  inscripcion = {
    nombre: '',
    telefono: '',
    id_actividad: '',
    fecha_inscripcion: '',
    estado: ''
  };

  constructor(
    private inscripcionService: InscripcionService,
    private router: Router
  ) {}

  crearInscripcion() {
    this.inscripcionService.crearInscripcion(this.inscripcion).subscribe((response) => {
      // Redirigir o mostrar mensaje de éxito
      this.router.navigate(['/inscripciones']);  // Volver a la vista de inscripciones
    });
  }
}
