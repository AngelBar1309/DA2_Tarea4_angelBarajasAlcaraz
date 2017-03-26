import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import  {ServicioProductos}from'../../providers/servicio-productos';
import {AlertController} from 'ionic-angular'


/*
  Generated class for the Productos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'productos',
  templateUrl: 'productos.html'
})
export class Productos {
	lista:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public ServicioProductos: ServicioProductos,public alertCtrl:AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
    this.ServicioProductos.getProductoslistar()
    .subscribe(
    	(data:any)=>{
    		this.lista=data;
    	},//data
    	(err)=>{console.log}
    	)//suscribe
    
  }

  eliminar(numero:number){
  	this.ServicioProductos.delete(numero).subscribe(
    	(data:any)=>console.log(data),
    	(err)=>{console.log}
    	)
  }
}
