import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DataBindingInterpolationComponent } from './data-binding-interpolation/data-binding-interpolation.component';
import { DataBindingPropertyBindingComponent } from './data-binding-property-binding/data-binding-property-binding.component';
import { DataBindingEventBindingComponent } from './data-binding-event-binding/data-binding-event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DataBindingInterpolationComponent,
    DataBindingPropertyBindingComponent,
    DataBindingEventBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
