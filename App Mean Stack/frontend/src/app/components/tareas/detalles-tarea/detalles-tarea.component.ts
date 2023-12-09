
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareasService } from 'src/app/services/tareas.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-detalles-tarea',
  templateUrl: './detalles-tarea.component.html',
  styleUrls: ['./detalles-tarea.component.css']
})
export class DetallesTareaComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private tareasService: TareasService) {}

  tarea = new BehaviorSubject<any>({});

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const tarea = await this.tareasService.getById(params['tareaId']);
      this.tarea.next(tarea);
    });
  }
}


