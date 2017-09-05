import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { ProfissionalComponent } from './profissional/profissional.component'

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profissional', component: HomeComponent },
    { path: 'profissional/:id', component: ProfissionalComponent }
]