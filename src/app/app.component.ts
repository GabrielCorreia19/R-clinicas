import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormPageComponent } from './components/form-page/form-page.component';
import { AgendaComponent } from './components/agenda/agenda.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, FormPageComponent, AgendaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'R-clinicas';
}
