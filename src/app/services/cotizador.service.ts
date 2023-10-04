import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizadorService {

  httpClient = inject(HttpClient)
  baseUrl = 'http://localhost:3000/api/cotizador';
  getAll(){
    return firstValueFrom(
      this.httpClient.get<any[]>(this.baseUrl)
      

    );
    
  }

  getById(cotID: string){
    return firstValueFrom(
      this.httpClient.get(`${this.baseUrl}/${cotID}`)
    );
  }
}
