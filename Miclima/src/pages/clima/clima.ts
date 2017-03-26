import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import  {ServicioClima}from'../../providers/servicio-clima';


/*
  Generated class for the Clima page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'clima',
  templateUrl: 'clima.html'
})
export class Clima {
	pronosticos:any[];
	 nombreCD= 'Puerto Peñasco';
	informacionCD;
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
    public ServicioClima: ServicioClima) {}//constructor


//document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Clima');

    this.ServicioClima.getPronostico()
    .subscribe(
    	(data:any)=>{
    		this.pronosticos=data.list;
    		let contador=0;

    		for (let dia of this.pronosticos) {
    			dia.fecha=new Date();
    			dia.fecha.setDate(dia.fecha.getDate()+contador);
    			contador++;
    		}

    		this.informacionCD=data.city;
    		
    	},//data
    	(err)=>{console.log}
    	)//suscribe
	}//
}//clima
