import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gamingproduct } from '../model/gamingproduct';

@Component({
  selector: 'app-gprod',
  templateUrl: './gprod.component.html',
  styleUrls: ['./gprod.component.css']
})
export class GprodComponent implements OnInit {

  @Input() gprod! : Gamingproduct;
  @Output() addtocart = new EventEmitter<Gamingproduct>();
 
  constructor() { }

  ngOnInit(): void {
  }
  sendnotif() {

    this.addtocart.emit()
  }

}
