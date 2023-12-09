import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tareas-lista',
  templateUrl: './tareas-lista.component.html',
  styleUrls: ['./tareas-lista.component.css']
})
export class TareasListaComponent implements OnInit {
  arrayTareas: any[] = [];

  constructor(private tareasService: TareasService) {}

  async ngOnInit() {
    const tareas = await this.tareasService.getAll();
    this.arrayTareas = tareas;
  }
}



