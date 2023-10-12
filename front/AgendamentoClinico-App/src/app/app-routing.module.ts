import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'painel', pathMatch: 'full' },
  { path: 'painel', loadChildren: () =>import('./pages/painel/painel.module').then(m => m.PainelModule)},
  { path: 'agendamento', loadChildren: () =>import('./pages/agendamento/agendamento.module').then(m => m.AgendamentoModule)},
  { path: 'consultas', loadChildren: () =>import('./pages/consultas/consultas.module').then(m => m.ConsultasModule)},
  { path: 'pacientes', loadChildren: () =>import('./pages/pacientes/pacientes.module').then(m => m.PacientesModule)},
  { path: 'medicos', loadChildren: () =>import('./pages/medicos/medicos.module').then(m => m.MedicosModule)},
  { path: 'painel', loadChildren: () =>import('./pages/painel/painel.module').then(m => m.PainelModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
