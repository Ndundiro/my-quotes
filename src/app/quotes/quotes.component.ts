import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
   quotes: Quote[] = [
    new Quote(1, "You have the chance to change the world."," Ndundiro Kamau"),
    new Quote(2, "Life is what you make it."," Ndundiro Kamau"),
    new Quote(3,"If your ship does not come in,swim out to it."," Ndundiro Kamau"),
    new Quote(4,"Don’t Let Yesterday Take Up Too Much Of Today"," Ndundiro Kamau"),
    new Quote(5,"You Learn More From Failure Than From Success."," Ndundiro Kamau"),
    new Quote(6,"Whether You Think You Can Or Think You Can’t, You’re Right"," Ndundiro Kamau")

  ];

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
