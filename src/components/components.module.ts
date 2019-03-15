import { NgModule } from '@angular/core';
import { MovieBrowsingTableComponent } from './table/movie-browsing-table/movie-browsing-table';
import { ButtonDesign1Component } from './buttons/button-design1/button-design1';
import { UnderlinedTextboxComponent } from './textboxes/underlined-textbox/underlined-textbox';
@NgModule({
	declarations: [MovieBrowsingTableComponent,
    ButtonDesign1Component,
    UnderlinedTextboxComponent],
	imports: [],
	exports: [MovieBrowsingTableComponent,
    ButtonDesign1Component,
    UnderlinedTextboxComponent]
})
export class ComponentsModule {}
