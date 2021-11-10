import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() Errors;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.Errors.currentValue.required){
      this.Errors="this field is obligatory "
    }
    else if (changes.Errors.currentValue.minlength){
      this.Errors="this field must contain at least "+changes.Errors.currentValue.minlength.requiredLength
    }
    else if (changes.Errors.currentValue.pattern!=null){
      this.Errors="this field must follow this pattern"
    }
  }


  ngOnInit(): void {
  }

}
