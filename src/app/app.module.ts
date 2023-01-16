import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DataBindingInterpolationComponent } from './data-binding-interpolation/data-binding-interpolation.component';
import { DataBindingPropertyBindingComponent } from './data-binding-property-binding/data-binding-property-binding.component';
import { DataBindingEventBindingComponent } from './data-binding-event-binding/data-binding-event-binding.component';
import { DataBuildingToWayBindingComponent } from './data-building-to-way-binding/data-building-to-way-binding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DataBindingInterpolationComponent,
    DataBindingPropertyBindingComponent,
    DataBindingEventBindingComponent,
    DataBuildingToWayBindingComponent,
    StructuralDirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
