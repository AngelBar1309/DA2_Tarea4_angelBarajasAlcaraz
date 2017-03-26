import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the ServicioProductos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServicioProductos {

  constructor(public http: Http) {
    console.log('Hello ServicioProductos Provider');
  }
 private direccionWeb=
  'http://localhost:55537/Producto/getJsonList';
 getProductoslistar(){
 	return this.http.get(this.direccionWeb)
 	.map(res=>res.json());
 }

private headers = new Headers({'Content-Type': 'application/json'});
 private urlDelate='http://localhost:55537/Producto/eliminarProducto'
 delete(numero:number){
 	return this.http.post(this.urlDelate,JSON.stringify(numero), this.headers)
 	.map(res=>res.json())
 }
}
