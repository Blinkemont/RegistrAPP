import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { loginCredentials } from "../loginCredentials.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = '';
  pswd = '';

  credentials: loginCredentials[] = [
    { id: 1, username: 'Elias', password: '1234' },
    { id: 2, username: 'Paloma', password: '4321' },
    { id: 3, username: 'bambino', password: '1221' },
  ];

  public alertButtons = ['OK'];

  constructor(private router: Router, private alertController: AlertController,) { }

  async login() {
    if (this.user && this.pswd) {
      let userFound = this.credentials.find(cred => cred.username === this.user && cred.password === this.pswd);
  
      if (userFound) {
        console.log("Usuario y contraseña correctos. ¡Bienvenido!");
        this.router.navigate(['/home', userFound.username]);
      } else {
        // Invalid login, show error alert
        const alert = await this.alertController.create({
          header: 'Alerta',
          subHeader: 'Credenciales inválidas',
          message: 'Por favor, ingrese credenciales válidas.',
          buttons: ['OK'],
        });
        await alert.present();
        console.error('Credenciales de inicio de sesión inválidas');
      }
    } else {
      console.error('Por favor, ingrese un usuario y una contraseña válidos.');
    }
  }
  

  recoverPswd(){
    this.router.navigate(['/find-your-username']);
  }

  ngOnInit() {
    console.log("La página de inicio de sesión está funcionando.");
  }
}
