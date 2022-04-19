import { Routes, RouterModule } from '@angular/router';
import { CaracteristicaPersonagemComponent } from './pages/caracteristica-personagem/caracteristica-personagem.component';
import { PersonagensComponent } from './pages/personagens/personagens.component';

const routes: Routes = [
  { path: 'home', component: PersonagensComponent},
  { path: 'detalhes-personagem/:id', component: CaracteristicaPersonagemComponent}
];

export const AppRoutes = RouterModule.forRoot(routes);
