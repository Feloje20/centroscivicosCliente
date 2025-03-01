import { Routes } from '@angular/router';
import { UsuarioLoginComponent } from './components/usuario-login/usuario-login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    // Rutas de usuario
    {path: 'login', component: UsuarioLoginComponent}
];
