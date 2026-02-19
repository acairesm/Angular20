import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  imports: [],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {

  codigo:number = 1;

  constructor(private route:ActivatedRoute){}

  ngOninit():void {
    this.codigo = Number(this.route.snapshot.paramMap.get('codigo'));
   
  }

}
