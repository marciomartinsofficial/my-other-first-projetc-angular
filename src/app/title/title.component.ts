import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  
  @Input() public titleMsg = "Hi component angular!";

  constructor() {}
  ngOnDestroy(): void {
    console.log("Go OnDestroy");
  }
  ngOnChanges(changes: SimpleChanges): void {
    //alert('titleMsg was changed!');
    console.log("titleMsg was changed!");
  }

  ngOnInit(): void {}

}
