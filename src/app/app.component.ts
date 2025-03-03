import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutsComponent } from "./produts/produts.component";

@Component({
  selector: 'app-root',
  imports: [ ProdutsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vijayi_wfh';
}
