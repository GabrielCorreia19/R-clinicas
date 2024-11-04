import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuHeaderComponent } from "../menu-header/menu-header.component";

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [NavbarComponent, MenuHeaderComponent, NgIf], // Add NgIf here
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {
  isNavbarVisible: boolean = true; // Initial state is visible
  navBarStyle = {
    position: 'absolute', 
    zIndex: 100,
  };


  toggleNavbar() {
    this.isNavbarVisible = !this.isNavbarVisible; // Toggle between show and hide
  }
}
