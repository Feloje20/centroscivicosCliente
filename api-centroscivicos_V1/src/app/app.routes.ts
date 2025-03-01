import { Routes } from '@angular/router';
import { UsuarioLoginComponent } from './components/usuario-login/usuario-login.component';
import { RefreshTokenComponent } from './components/refresh-token/refresh-token.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    // Rutas de usuario
    // Ruta de login
    {path: 'login', component: UsuarioLoginComponent},
    // Ruta de refresco de token
    {path: 'token/refresh', component: RefreshTokenComponent, canActivate: [AuthGuard]},
];
