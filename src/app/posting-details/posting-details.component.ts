import { Component, OnInit, Input } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-posting-details',
  templateUrl: './posting-details.component.html',
  styleUrls: ['./posting-details.component.css']
})
export class PostingDetailsComponent implements OnInit {
  today= new Date();

  @Input() quote: Quote;

  constructor() { }

  ngOnInit() {
  }

}
