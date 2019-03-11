import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,public alertController: AlertController) { }

  dologin() 
  {
  	
  	if(this.username == this.password)
  	{
  		this.router.navigate(['dashboard']);
  	}
  	else {

  		this.presentAlert();
  		
  	}
  	
  }

    async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login',
      subHeader: 'Login Failed',
      message: 'username or password is wrong',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {}

}
