import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isVisible: boolean = true; // Navbar visível por padrão

  constructor(private router: Router) {}

  toggleVisibility() {
    this.isVisible = !this.isVisible; // Alterna visibilidade
  }

  goFormPage() {
    this.router.navigate(['formularios']);
  }

  goHome() {
    this.router.navigate(['home']);
  }
}
