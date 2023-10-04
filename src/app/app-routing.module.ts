import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizadorListComponent } from './components/cotizador/cotizador-list/cotizador-list.component';
import { DetailCotizadorComponent } from './components/cotizador/detail-cotizador/detail-cotizador.component';

const routes: Routes = [
  { path: 'cotizador', component: CotizadorListComponent },
  { path: 'cotizador/:cotID', component: DetailCotizadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
