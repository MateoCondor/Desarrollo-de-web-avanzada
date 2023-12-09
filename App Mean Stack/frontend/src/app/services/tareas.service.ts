import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:3000/api/tareas';


  getAll() {
    return firstValueFrom(
      this.httpClient.get<any[]>(this.baseUrl)
    );
  }

  getById(id: string) { 
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/${id}`)
    );
  }



}
