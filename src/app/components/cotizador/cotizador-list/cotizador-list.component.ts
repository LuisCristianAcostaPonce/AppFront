import { Component, inject, signal } from '@angular/core';
import { CotizadorService } from 'src/app/services/cotizador.service';

@Component({
  selector: 'app-cotizador-list',
  templateUrl: './cotizador-list.component.html',
  styleUrls: ['./cotizador-list.component.css']
})
export class CotizadorListComponent {

arrCotizacion = signal<any[]>([]);


cotizadorService = inject(CotizadorService)

async ngOnInit(){
  const cotizador = await this.cotizadorService.getAll();
  this.arrCotizacion.set(cotizador);
  //console.log(cotizador);
}
}
