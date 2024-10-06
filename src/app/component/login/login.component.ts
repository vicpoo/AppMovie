import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Asegúrate de importar Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Datos de usuario y contraseña predeterminados
  private defaultUsername: string = 'jefe';
  private defaultPassword: string = '117';

  constructor(private router: Router) {}

  // Función de login que valida las credenciales
  login(username: string, password: string) {
    // Verifica si el usuario y la contraseña son correctos
    if (username === this.defaultUsername && password === this.defaultPassword) {
      // Redirige a la página de administrador si es correcto
      this.router.navigate(['/admin']);
    } else {
      // Muestra un mensaje de error si es incorrecto
      alert('Usuario o contraseña incorrectos');
    }
  }
}
