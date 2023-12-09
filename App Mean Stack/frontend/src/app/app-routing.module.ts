import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasListaComponent } from './components/tareas/tareas-lista/tareas-lista.component';
import { DetallesTareaComponent } from './components/tareas/detalles-tarea/detalles-tarea.component';

const routes: Routes = [
  {path: 'tareas',component: TareasListaComponent},
  {path:'tareas/:tareaId',component: DetallesTareaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
