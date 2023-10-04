import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CotizadorListComponent } from './components/cotizador/cotizador-list/cotizador-list.component';
import { DetailCotizadorComponent } from './components/cotizador/detail-cotizador/detail-cotizador.component';

@NgModule({
  declarations: [
    AppComponent,
    CotizadorListComponent,
    DetailCotizadorComponent
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
