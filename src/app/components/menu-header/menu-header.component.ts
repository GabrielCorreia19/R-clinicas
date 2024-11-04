import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  standalone: true,
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent {
  @Output() toggleNavbar = new EventEmitter<void>();

  onMenuClick() {
    this.toggleNavbar.emit(); // Emite o evento para o componente pai
  }
}
