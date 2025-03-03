import { Routes } from '@angular/router';
import { UsuarioLoginComponent } from './components/usuario-login/usuario-login.component';
import { RefreshTokenComponent } from './components/refresh-token/refresh-token.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CentroListComponent } from './components/centro-list/centro-list.component';
import { CentroDetailComponent } from './components/centro-detail/centro-detail.component';
import { InstalacionListComponent } from './components/instalacion-list/instalacion-list.component';
import { InstalacionListAllComponent } from './components/instalacion-list-all/instalacion-list-all.component';
import { ActividadListAllComponent } from './components/actividad-list-all/actividad-list-all.component';
import { ActividadListCentroComponent } from './components/actividad-list-centro/actividad-list-centro.component';
import { NuevaReservaComponent } from './components/nueva-reserva/nueva-reserva.component';
import { CancelarReservaComponent } from './components/cancelar-reserva/cancelar-reserva.component';
import { MisReservasComponent } from './components/mis-reservas/mis-reservas.component';
import { NuevaInscripcionComponent } from './components/nueva-inscripcion/nueva-inscripcion.component';
import { MisInscripcionesComponent } from './components/mis-inscripciones/mis-inscripciones.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    // Ruta por defecto
    { path: '', component: HomeComponent },  
    // Rutas de usuario
    // Ruta de login
    {path: 'login', component: UsuarioLoginComponent},
    // Ruta de refresco de token
    {path: 'token/refresh', component: RefreshTokenComponent, canActivate: [AuthGuard]},
    // Ruta de registro de usuario
    { path: 'register', component: RegisterComponent },
    // Ruta de manejo del usuario logeado
    { path: 'user', component: UserProfileComponent },
    // Ruta de centros
    { path: 'centros', component: CentroListComponent },
    // Ruta de centro específico,
    { path: 'centros/:id', component: CentroDetailComponent },
    // Ruta de instalaciones de un centro
    { path: 'centros/:id/instalaciones', component: InstalacionListComponent },
    // Ruta de todas las instalaciones
    { path: 'instalaciones', component: InstalacionListAllComponent },
    // Ruta de todas las actividades
    { path: 'actividades', component: ActividadListAllComponent },
    // Ruta de las actividades de un centro
    { path: 'centros/:id/actividades', component: ActividadListCentroComponent },
    // RUTAS DE RESERVAS
    { path: 'reserva', component: NuevaReservaComponent },
    { path: 'reservas/cancelar/:id', component: CancelarReservaComponent },
    { path: 'reservas', component: MisReservasComponent },
    // Rutas de INSCRIPCIONES
    { path: 'inscripcion', component: NuevaInscripcionComponent },
    { path: 'inscrpciones/cancelar/:id', component: CancelarReservaComponent },
    { path: 'inscripciones', component: MisInscripcionesComponent }
];
