import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Clima } from '../pages/clima/clima';
import {Productos } from '../pages/productos/productos';
import { ServicioClima } from '../providers/servicio-clima';
import { ServicioProductos } from '../providers/servicio-productos';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Clima,
    Productos,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Clima,
    Productos,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler,
  }, ServicioClima, ServicioProductos]
})
export class AppModule {}
