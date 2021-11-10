import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertisseur',
  templateUrl: './convertisseur.component.html',
  styleUrls: ['./convertisseur.component.css']
})
export class ConvertisseurComponent implements OnInit {
  myVal:String 


  formmini : FormGroup

  constructor() { }

  ngOnInit(): void {
  }



  get getconvertisseur() { return this.formmini.get('convertisseur'); }

}
