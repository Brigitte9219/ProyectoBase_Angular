import { Component } from '@angular/core';

@Component({
  selector: 'app-primeradirectiva',
  templateUrl: './primeradirectiva.component.html',
  styleUrls: ['./primeradirectiva.component.css']
})
export class PrimeradirectivaComponent {
  color : boolean = true;
  border: boolean=true;

  Lista: Array<string>=['Argentina', 'Brasil', 'Chile', 'Colombia', 'España', 'Mexico', 'Japon']

  Edad: number=10;

  Fecha: Date = new Date();
}
