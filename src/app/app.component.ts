import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  title = 'my-other-first-projetc-angular';
  
  public count: number = 1;

  public addOne(): number {
    return this.count += 1;
  }

  ngOnInit(): void {
    console.log('Please, wait for one second...');
    setTimeout( () => {
      console.log('Go OnInit');
    }, 1000); 
  }

  ngDoCheck(): void {
    console.log('Go DoCheck');
  }

  ngAfterContentInit(): void {
    console.log('Go AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Go AfterContentCheck');
  }

  ngAfterViewInit(): void {
    console.log('Go AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('Go AfterViewCheck');
  }
}
