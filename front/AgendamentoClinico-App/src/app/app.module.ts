import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './shared/Materials/material.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidenavComponent } from './shared/components/sidenav/sidenav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';

import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';







@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
  useValue: {appearance: 'outline'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
