import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product-rf',
  templateUrl: './add-product-rf.component.html',
  styleUrls: ['./add-product-rf.component.css']
})
export class AddProductRFComponent implements OnInit {
myFormGeneral : FormGroup;
form1 : FormGroup;

form2 : FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.myFormGeneral=
    new FormGroup({form1:new FormGroup({
        idproduit:new FormControl("",[Validators.required]),
        code : new FormControl("",[Validators.required]),
        libelle : new FormControl("",[Validators.required]),
        prixunitaire : new FormControl("",[Validators.required])
       }),
       form2:new FormGroup({iddetailproduit:new FormControl("",[Validators.required]),
        datecreation : new FormControl("",[Validators.required]),
        datedernieremodification : new FormControl("",[Validators.required]),
        categorieproduit : new FormControl("",[Validators.required])
       },)
//,Validators.pattern("a-zA-Z-0-9]{8}")    ,Validators.minLength(3)  ,Validators.pattern("[1-9][0-9]*")
    })
  }

}
