import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UsersModel} from '../../services/model/Users.model'
import { DashboardPage } from '../dashboard/dashboard'
import {ButtonDesign1Component} from '../../components/buttons/button-design1/button-design1'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  buttonLabel:String='LOGIN';
  userDetail:UsersModel=new UsersModel();
  constructor(public navCtrl: NavController) {
    this.userDetail.EmailAddress="test";
  }
  LoginOnClick(){
    this.navCtrl.push(DashboardPage);
  }
}
