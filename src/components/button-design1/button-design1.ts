import { Component, Input } from '@angular/core';

/**
 * Generated class for the ButtonDesign1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'button-design1',
  templateUrl: 'button-design1.html'
})
export class ButtonDesign1Component {
  @Input() buttonName:string;
  constructor(){
  }
}
