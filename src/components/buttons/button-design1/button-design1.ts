import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-design1',
  templateUrl: 'button-design1.html'
})
export class ButtonDesign1Component {
  @Input() public buttonName:string="Default";
  @Input() public addonClass:string="";
  mystyle:string="btn1-float-right btn-width btn1-bg-color btn1-text-color ";
  constructor(){}
  //use ngOnInit invokes after object has been initialize
  //entry point to update the ui design
  ngOnInit(){
    this.mystyle=this.mystyle+this.addonClass;
  }

}
