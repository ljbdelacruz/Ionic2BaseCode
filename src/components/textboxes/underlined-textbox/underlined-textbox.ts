import { Component, Input } from '@angular/core';
@Component({
  selector: 'underlined-textbox',
  templateUrl: 'underlined-textbox.html'
})
export class UnderlinedTextboxComponent {
  @Input() public addonClass:string;
  @Input() public placeholder:string;
  @Input() public type:string;
  mystyle:string="utb-text-color utb-bg-color utb-borderlined ";
  constructor(){}
  ngOnInit(){
    this.mystyle=this.mystyle+this.addonClass;
    console.log(this.mystyle);
  }
}
