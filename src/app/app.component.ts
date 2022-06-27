import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-projekt-ks';
  public fullForm: string = "";
  public isItOn: boolean = false;

switchTrue(fullForm: string): void {
    this.isItOn = true;
    this.fullForm = fullForm
  }
}
