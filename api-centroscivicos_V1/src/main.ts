import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { authInterceptor } from './app/interceptors/auth.interceptor';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router'; // Importar Router

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Agregar rutas
    provideHttpClient(withInterceptors([authInterceptor])) // Agregar Interceptor
  ]
}).catch((err) => console.error(err));
