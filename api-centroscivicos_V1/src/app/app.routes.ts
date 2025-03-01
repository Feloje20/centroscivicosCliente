import { Routes } from '@angular/router';
import { UsuarioLoginComponent } from './components/usuario-login/usuario-login.component';
import { RefreshTokenComponent } from './components/refresh-token/refresh-token.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    // Rutas de usuario
    // Ruta de login
    {path: 'login', component: UsuarioLoginComponent},
    // Ruta de refresco de token
    {path: 'token/refresh', component: RefreshTokenComponent, canActivate: [AuthGuard]},
    // Ruta de registro de usuario
    { path: 'register', component: RegisterComponent },
    // Ruta de manejo del usuario logeado
    { path: 'user', component: UserProfileComponent }
];
