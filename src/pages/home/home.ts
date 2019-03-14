import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UsersModel} from '../../services/model/Users.model.ts'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userDetail:UsersModel=new UsersModel();
  constructor(public navCtrl: NavController) {

  }
}
