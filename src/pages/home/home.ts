import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UsersModel} from '../../services/model/Users.model'
import { DashboardPage } from '../dashboard/dashboard'
import {GeneralUIModel} from '../../components/model/generalUI.model'

import {} from './components/table/movie-browsing-table/movie-browsing-table'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  buttonLabel:String='LOGIN';
  buttonModel:GeneralUIModel=new GeneralUIModel();
  emailModel:GeneralUIModel=new GeneralUIModel();
  passwordModel:GeneralUIModel=new GeneralUIModel();

  userDetail:UsersModel=new UsersModel();
  constructor(public navCtrl: NavController) {
    this.InitUILoginButton();
    this.InitTextBox();
  }
  LoginOnClick(){
    this.navCtrl.push(DashboardPage);
  }
  InitUILoginButton(){
    this.buttonModel.label="LOGIN";
    this.buttonModel.classAddons="margin-top-40px";
  }
  InitTextBox(){
    this.emailModel.placeholder="Username/Email"
    this.emailModel.type="text";
    this.passwordModel.placeholder="Password"
    this.passwordModel.type="password";
  }
}
