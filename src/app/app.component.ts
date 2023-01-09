import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-other-first-projetc-angular';
  
  ngOnInit(): void {
    console.log('Please, wait for one second...');
    setTimeout( () => {
      console.log('Go!!!');
    }, 1000);
  }
}
