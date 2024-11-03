    import { Routes } from '@angular/router';
import { FormPageComponent } from './components/form-page/form-page.component';
import { HomeComponent } from './components/home/home.component';


    export const routes: Routes = [
        { path: 'home', component: HomeComponent },
        { path: 'formularios', component: FormPageComponent },
        { path: '**', redirectTo: 'home' },
        { path: '', redirectTo: 'home', pathMatch: 'full' }
    ];

