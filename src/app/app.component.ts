import { Component } from '@angular/core';
import { STUDENTS } from './models/students';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lista-herrera';
  students  = STUDENTS

   getColors(promedio: number): string {
    return promedio < 7 ? "table-danger" :
    promedio <= 8 ? "table-warning" :
    promedio <= 9 ? "table-info" :
    promedio <= 10 ? "table-success" :
    "";
  }
}
