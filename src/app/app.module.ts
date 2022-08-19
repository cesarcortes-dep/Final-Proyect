import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { TablaComponent } from './components/tabla/tabla.component';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { EditarDialogComponent } from './components/editar-dialog/editar-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { ReactiveFormsModule } from '@angular/forms';
import {  MatSlideToggleModule} from "@angular/material/slide-toggle";
import { DirectivasComponent } from './components/directivas/directivas.component';
import { ResaltadoDirective } from './directives/resaltado.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NombreApellidoPipe,
    NavbarComponent,
    MainComponent,
    EditarDialogComponent,
    TablaComponent,
    DirectivasComponent,
    ResaltadoDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
