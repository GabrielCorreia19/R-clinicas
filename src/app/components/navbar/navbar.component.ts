import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule], // Adicionar CommonModule aqui
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() navBarStyle: { [klass: string]: any } = {};

  constructor(private router: Router) {}

  goFormPage() {
    this.router.navigate(['formularios']);
  }
  
  goHome() {
    this.router.navigate(['home']);
  }
}
