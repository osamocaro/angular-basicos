import { Component } from '@angular/core';

@Component({
    selector:'app-contador',
    template:`
    <h1>{{titulo}}</h1>
    <button (click)="acumular()">+{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular()">-{{base}}</button>
    `
})


export class ContadorComponent{
    titulo:string = 'Contador App';
    numero:number=0;
    base:number=5;
    sumar(){
      this.numero+=1;
    }
    restar(){
      this.numero-=1;
    }
    acumular(){
      this.numero+=this.base;
    }
}