import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendenteComponent } from './components/atendente.component';
import { ClienteComponent } from './components/cliente.component';
import { PainelComponent } from './components/painel.component';

const routes: Routes = [
  { path: '', redirectTo: 'cliente', pathMatch: 'full' },
  { path: 'cliente', component: ClienteComponent },
  { path: 'atendente', component: AtendenteComponent },
  { path: 'painel', component: PainelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}