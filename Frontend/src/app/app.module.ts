import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { AcercaComponent } from './components/acerca/acerca.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { PorfolioService} from './servicios/porfolio.service';
import {HttpClientModule} from '@angular/common/http';
import { BannerComponent } from './components/header/banner/banner.component';

import { FondoComponent } from './components/header/fondo/fondo.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FoterComponent } from './components/foter/foter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
     AcercaComponent,
     EducacionComponent,
     ConocimientosComponent,
     BannerComponent,
  
     FondoComponent,
     HysComponent,
     ProyectoComponent,
     FoterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
