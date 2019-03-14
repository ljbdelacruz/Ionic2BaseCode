import { NgModule } from '@angular/core';
import { MovieBrowsingTableComponent } from './movie-browsing-table/movie-browsing-table';
import { ButtonDesign1Component } from './button-design1/button-design1';
@NgModule({
	declarations: [MovieBrowsingTableComponent,
    ButtonDesign1Component],
	imports: [],
	exports: [MovieBrowsingTableComponent,
    ButtonDesign1Component]
})
export class ComponentsModule {}
