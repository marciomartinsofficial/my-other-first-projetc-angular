import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-interpolation',
  templateUrl: './data-binding-interpolation.component.html',
  styleUrls: ['./data-binding-interpolation.component.scss']
})
export class DataBindingInterpolationComponent {

  public age: number = 35;

  public incrementValue: number = 1;

  public increment(): number {
    return this.age + this.incrementValue;
  }
}
