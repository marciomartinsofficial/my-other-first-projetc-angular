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

  public name:string = 'Luis';

  public ready:boolean = true;

  public backgroundColor:string = 'yellow';

  public heightPx:string = '20px';

  ngOnInit(): void {
    setInterval( () => {
      this.printP = !this.printP;
    }, 2000);

    setInterval(
      () => {
        this.ready = !this.ready;

        if (this.backgroundColor == 'yellow') {
          this.backgroundColor = 'blue';
        } else {
          this.backgroundColor = 'yellow';
        }

        if (this.heightPx == '20px') {
          this.heightPx = '70px';
        } else {
          this.heightPx = '20px';
        }
      }, 2000
    );
  }

  public onClickAdd(): void {
    this.list.push({name: "Luís", age: 10});
  }

  public onClickRemove(i: number): void {
    this.list.splice(i, 1);
  }
}
