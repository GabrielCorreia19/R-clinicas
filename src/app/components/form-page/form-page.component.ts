import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuHeaderComponent } from "../menu-header/menu-header.component";

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, MenuHeaderComponent], 
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {
  isNavbarVisible: boolean = false; 
  navBarStyle = {
    position: 'absolute', 
    zIndex: 100,
  };

  toggleNavbar() {
    this.isNavbarVisible = !this.isNavbarVisible;
  }
}
