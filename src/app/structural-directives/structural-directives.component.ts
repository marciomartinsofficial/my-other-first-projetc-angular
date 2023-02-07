import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  public list: Array<{name: string, age: number}> = [
    {name: "Márcio Martins", age: 35},
    {name: "Kelly Burm", age: 21},
    {name: "Jonh Filipe", age: 42}
  ];
  
  public printP:boolean = true;

  ngOnInit(): void {
    setInterval( () => {
      this.printP = !this.printP;
    }, 2000);
  }

  public onClickAdd(): void {
    this.list.push({name: "Luís", age: 10});
  }

  public onClickRemove(i: number): void {
    this.list.splice(i, 1);
  }
}
