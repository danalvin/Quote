import { Component, OnInit } from '@angular/core';
import {Quote} from "../quote"

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[new Quote("you only live once","YOLO","me")]
  addQuote(myQuote){
    this.quotes.push(myQuote)
  }
  upvote(i){
    this.quotes[i].upvotes +=1
  }
  downvote(i){
    this.quotes[i].downvotes +=1
  }

  constructor() { }


  ngOnInit() {
  }

}
