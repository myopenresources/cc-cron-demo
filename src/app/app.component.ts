import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  cron = '0-59 0-59 5,1,2 ? 1 0,1 2020-2120';


  cronChange(value: any) {
    console.log(value);
  }
}
