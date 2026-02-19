import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rotas } from "./rotas/rotas";

@Component({
  selector: 'app-root',
  imports: [Rotas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('novo-teste-aaa');
}
