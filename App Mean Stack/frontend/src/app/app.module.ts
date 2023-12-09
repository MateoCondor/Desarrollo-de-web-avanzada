import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasListaComponent } from './components/tareas/tareas-lista/tareas-lista.component';
import { DetallesTareaComponent } from './components/tareas/detalles-tarea/detalles-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasListaComponent,
    DetallesTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
