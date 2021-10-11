import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  public Id: string;
  public Active: string;


  constructor(private ac:ActivatedRoute) { }

  ngOnInit(): void {

    this.ac.paramMap.subscribe(params => {
      this.Id = params.get("Id")
      this.Active = params.get("Active")

    })

  }

}
