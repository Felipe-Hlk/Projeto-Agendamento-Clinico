import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasComponent } from './consultas.component';
import { SharedModule } from 'src/app/shared/models/shared.modules';
import { ConsultasMaterialModule } from 'src/app/shared/Materials/consultas-mat.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    ConsultasComponent

  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    ConsultasMaterialModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule


  ]
})
export class ConsultasModule {}
