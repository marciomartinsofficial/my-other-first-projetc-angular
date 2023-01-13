import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-event-binding',
  templateUrl: './data-binding-event-binding.component.html',
  styleUrls: ['./data-binding-event-binding.component.scss']
})
export class DataBindingEventBindingComponent {

  public happen(eventValue: MouseEvent): void {
    console.log("It's happen now. movementX = " + eventValue.movementX);
  }

  public move(eventValue: MouseEvent):void {
    console.log("It's move now. movementX = " + eventValue.movementX);
  }

}
