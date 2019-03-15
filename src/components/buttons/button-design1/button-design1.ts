import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-design1',
  templateUrl: 'button-design1.html'
})
export class ButtonDesign1Component {
  @Input() public buttonName:string="Default";
  constructor(){
  }
}
