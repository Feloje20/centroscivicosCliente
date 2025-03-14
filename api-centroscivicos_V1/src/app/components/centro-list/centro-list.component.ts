import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentroService } from '../../services/centro.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-centro-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './centro-list.component.html',
  styleUrls: ['./centro-list.component.css']
})
export class CentroListComponent implements OnInit {
  centros: any[] = [];
  errorMessage: string = '';

  constructor(private centroService: CentroService
  ) {}

  ngOnInit(): void {
    this.getCentros();
  }

  getCentros(): void {
    this.centroService.getCentros().subscribe({
      next: (data) => {
        this.centros = data;
      },
      error: (err) => {
        this.errorMessage = 'Error fetching centros data';
        console.error(err);
      }
    });
  }
}