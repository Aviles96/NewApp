import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  token = localStorage.getItem("token");
  cities: any = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    public toastController: ToastController,
    public alertController: AlertController ) { }

  //Llamado de la funcion para hacer la vista
  ngOnInit() 
  {
    console.log("token:", this.token)
    localStorage.clear();
    this.getCities().subscribe(res=>{
      console.log("Res", res)
      this.cities = res;
    });
  }

  //Funcion para mostrar la informacion de cities
  getCities()
  {
    return this.http
    .get("assets/files/cities.json")
    .pipe(
      map((res:any) => {
        return res.data;
      })
    )
  }

//Funcion para mostrar al darle touch
async presentToast1()
{
  const toast = await this.toastController.create({
    message: "Ciudad seleccionadas",
    duration: 2000,
    position: "bottom"
  });
  toast.present()
}

//Funcion en forma de alerta que interactua el usuario
async presentAlert1()
{
  const alert = await this.alertController.create({
    header: "Borrar Ciudad",
    message: "Se ha borrado correctamente",
    buttons: ["Ok"]
  });
  await alert.present()
  let result = await alert.onDidDismiss();
  console.log(result);
}

//Funcion de alerta pero con dos botones interactivos
async presentAlert2()
{
  const alert = await this.alertController.create({
    header: "Borrar Ciudad",
    message: "Estas seguro?",
    buttons: [
      {
        text: 'No',
        handler: () => {
          console.log("No cancel")
        }
      },
      {
        text: 'Si',
        handler: () => {
          console.log("Ciudad Elimanada")
        }
      }
    ]
  });
  await alert.present()
  let result = await alert.onDidDismiss();
  console.log(result);
}
}
