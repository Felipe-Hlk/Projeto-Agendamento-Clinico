import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { AgendamentoComponent } from './agendamento.component';
import { SharedModule } from 'src/app/shared/models/shared.modules';
import { AgendamentoMaterialModule } from 'src/app/shared/Materials/agendamento-mat.module';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';

import { FullCalendarModule } from '@fullcalendar/angular';

import interactionPlugin from '@fullcalendar/interaction';
import daygridPlugin from '@fullcalendar/daygrid';




@NgModule({
  declarations: [
    AgendamentoComponent

  ],
  imports: [
    CommonModule,
    AgendamentoRoutingModule,
    AgendamentoMaterialModule,
    MatDatepickerModule,
    MatCardModule,
    SharedModule,
    FullCalendarModule

  ]
})
export class AgendamentoModule {}
