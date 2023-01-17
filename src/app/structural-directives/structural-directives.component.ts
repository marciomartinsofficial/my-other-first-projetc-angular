import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  
  public printP:boolean = true;

  ngOnInit(): void {
    setInterval( () => {
      this.printP = !this.printP;
    }, 2000);
  }

}
