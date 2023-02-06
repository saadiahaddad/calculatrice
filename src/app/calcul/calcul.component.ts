import { Component } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent {

 public num1!: number;
 public num2!: number;
 public num3!:number; 

add(){
  this.num3= this.num1+this.num2;

}

sub(){
  this.num3= this.num1-this.num2;

}

mult(){
  this.num3= this.num1*this.num2;

}
div (){
  this.num3= this.num1/this.num2;

}

}
