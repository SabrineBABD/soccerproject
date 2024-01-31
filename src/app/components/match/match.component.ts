import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {


  @Input() match: any
  @Output() newPass  = new EventEmitter <any>()
  
  constructor() { }

  ngOnInit(): void {
  }

  compare(a: any, b: any) {
    if (Number(a) > Number(b)) {

      return ["Win","green"]
    } else if (Number(a) < Number(b)) {

      return ["loss","blue"]

    } else {
      return ["Draw","yellow"]

    }
  }


  passId(){
    
    console.log("here id into child",this.match.id);
    this.newPass.emit(this.match.id)

  }




}
