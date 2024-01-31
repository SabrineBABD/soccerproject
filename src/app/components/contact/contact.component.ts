import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  count: any = 0


  constructor() { }

  ngOnInit(): void {  
    this.count = 2
  }

  setCount() {
    this.count = this.count + 1;
  }



}
