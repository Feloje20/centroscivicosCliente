import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './user-profile.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  usuario: string = '';
  email: string = '';
  password: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData() {
    this.authService.getUserData().subscribe({
      next: (user) => {
        this.usuario = user.usuario;
        this.email = user.email;
      },
      error: (err) => {
        console.error('Error fetching user data:', err);
      }
    });
  }

  updateUser() {
    const updatedData: any = {};
    if (this.usuario) updatedData.usuario = this.usuario;
    if (this.email) updatedData.email = this.email;
    if (this.password) updatedData.password = this.password;

    this.authService.updateUser(updatedData).subscribe({
      next: () => {
        this.successMessage = 'Profile updated successfully!';
        this.errorMessage = '';
      },
      error: (err) => {
        console.error('Error updating user:', err);
        this.errorMessage = 'Failed to update profile.';
      }
    });
  }

  deleteAccount() {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      this.authService.deleteAccount().subscribe({
        next: () => {
          alert('Account deleted successfully.');
          this.authService.logout();
          this.router.navigate(['/register']);
        },
        error: (err) => {
          console.error('Error deleting account:', err);
          this.errorMessage = 'Failed to delete account.';
        }
      });
    }
  }
}
