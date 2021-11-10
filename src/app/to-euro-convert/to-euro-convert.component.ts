import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-euro-convert',
  templateUrl: './to-euro-convert.component.html',
  styleUrls: ['./to-euro-convert.component.css']
})
export class ToEuroConvertComponent implements OnInit {

  @Input() prop1:any;

   prop5 :any

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges()
  {
    this.prop5=this.prop1 *3.14;

  
    

  }

  
 

}
