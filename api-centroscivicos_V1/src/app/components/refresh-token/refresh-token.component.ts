import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-refresh-token',
  templateUrl: './refresh-token.component.html',
  imports: [CommonModule],
  styleUrls: ['./refresh-token.component.css']
})
export class RefreshTokenComponent {
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService) {}

  refreshToken() {
    this.authService.refreshToken().subscribe({
      next: (response: any) => {
        this.authService.saveToken(response.jwt);
        this.successMessage = 'Token refreshed successfully!';
      },
      error: (err: any) => {
        console.error('Error refreshing token:', err);
        this.errorMessage = 'Failed to refresh token. Please login again.';
      }
    });
  }
}
