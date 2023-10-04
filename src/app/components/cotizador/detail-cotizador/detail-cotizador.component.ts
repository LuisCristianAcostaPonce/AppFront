import { Component, inject,signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CotizadorService } from 'src/app/services/cotizador.service';

@Component({
  selector: 'app-detail-cotizador',
  templateUrl: './detail-cotizador.component.html',
  styleUrls: ['./detail-cotizador.component.css']
})
export class DetailCotizadorComponent {

  activatedRoute = inject(ActivatedRoute);
  cotizadorService = inject(CotizadorService);

  cotizacion = signal<any>({});
  ngOnInit(){
    this.activatedRoute.params.subscribe(async params => {
      const cotizacion = await this.cotizadorService.getById(params['cotID']);
      this.cotizacion.set(cotizacion);
    });
  }

}
