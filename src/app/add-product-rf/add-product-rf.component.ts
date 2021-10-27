import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { product } from '../models/product';

@Component({
  selector: 'app-add-product-rf',
  templateUrl: './add-product-rf.component.html',
  styleUrls: ['./add-product-rf.component.css']
})
export class AddProductRFComponent implements OnInit {
  formGeneral : FormGroup;
  form2: FormGroup;
  Products: Array<product>;
  ajout: product;
  constructor() { }

  ngOnInit(): void {
    this.ajout= new product();
    this.Products= [];

    this.formGeneral= new FormGroup({
      idproduit: new FormControl("",[Validators.required]),
      code: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z-0-9]{8,}")]),
      libelle: new FormControl("",[Validators.required,Validators.minLength(3)]),
      prixunitaire: new FormControl("",[Validators.required,Validators.pattern("[1-9][0-9]*")]),
      form2: new FormGroup({
        iddetailproduit: new FormControl("",Validators.required),
        datecreation: new FormControl("",Validators.required),
        datedernieremodification: new FormControl("",Validators.required),
        categorie: new FormControl("",Validators.required)

      })
    });
  
  }

  get IdProduit() {
    return this.formGeneral.get('idproduit');
  }
  get Code() {
    return this.formGeneral.get('code');
  }

  get Libelle() {
    return this.formGeneral.get('libelle');
  }

  get PrixUnitaire() {
    return this.formGeneral.get('prixunitaire');
  }

  get IdDetailProduit() {
    return this.formGeneral.get('form2.iddetailproduit');
  }

  get DateCreation() {
    return this.formGeneral.get('form2.datecreation');
  }
  get DateDerniereModification () {
    return this.formGeneral.get('form2.datedernieremodification');
  }
   get Categorie() {
    return this.formGeneral.get('form2.categorie');

   }

   ajoutprod() {
        this.ajout.code= this.Code.value;
    this.ajout.categorie= this.Categorie.value;
    this.ajout.dateCreation= this.DateCreation.value;
    this.ajout.idProduit= this.IdProduit.value;
    this.ajout.libelle= this.Libelle.value;
    this.ajout.prixUnitaire= this.PrixUnitaire.value;
    this.ajout.idDetailProduit= this.IdDetailProduit.value;
    this.ajout.dateDerniereModification= this.DateDerniereModification.value;
    this.Products.push(this.ajout);
    console.log(JSON.stringify(this.Products));

  }

}