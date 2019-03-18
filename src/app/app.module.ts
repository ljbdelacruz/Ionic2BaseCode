import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard'
//CustomComponents
import {MovieBrowsingTableComponent} from '../components/table/movie-browsing-table/movie-browsing-table'
import {ButtonDesign1Component} from '../components/buttons/button-design1/button-design1';
import {UnderlinedTextboxComponent} from '../components/textboxes/underlined-textbox/underlined-textbox'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    //CustomComponents
    MovieBrowsingTableComponent,
    ButtonDesign1Component,
    UnderlinedTextboxComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
