import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
   quotes:Quote[] = [
    {id:1,name:"You have the chance to change the world.",owner:" Ndundiro Kamau",date:new Date(2000,4,10),},
    {id:2,name:"Life is what you make it.",owner:" Ndundiro Kamau"},
    {id:3,name:"If your ship does not come in,swim out to it.",owner:" Ndundiro Kamau"},
    {id:4,name:"Don’t Let Yesterday Take Up Too Much Of Today",owner:" Ndundiro Kamau"},
    {id:5,name:"You Learn More From Failure Than From Success.",owner:" Ndundiro Kamau"},
    {id:6,name:"Whether You Think You Can Or Think You Can’t, You’re Right",owner:" Ndundiro Kamau"},

  ];
  
  constructor() { }

  ngOnInit() {
  }

}
