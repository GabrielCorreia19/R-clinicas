    import { Routes } from '@angular/router';
import { FormPageComponent } from './components/form-page/form-page.component';
import { HomeComponent } from './components/home/home.component';
import { AgendaComponent } from './components/agenda/agenda.component';


    export const routes: Routes = [
        { path: 'home', component: HomeComponent },
        { path: 'formularios', component: FormPageComponent },
        { path: 'agenda', component: AgendaComponent },
        { path: '**', redirectTo: 'home' },
        { path: '', redirectTo: 'home', pathMatch: 'full' }
    ];
