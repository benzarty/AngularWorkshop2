import { User } from './../models/User';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form-parent',
  templateUrl: './add-form-parent.component.html',
  styleUrls: ['./add-form-parent.component.css']
})
export class AddFormParentComponent implements OnInit {

  formGeneral : FormGroup;
  FormBuilder: [];
 

  constructor(private  _formBuilder: FormBuilder) { }

  ngOnInit(): void {

  
 this.formGeneral = new FormGroup({
      firstName: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]*"),Validators.minLength(3),Validators.minLength(3)]),
      lastName: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]*"),Validators.minLength(3),Validators.minLength(3)]),
      birthDate: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")]),
      password: new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern("^[a-zA-Z0-9]{8,}?")]),
      profession: new FormControl("",[Validators.required]),
      customerCategory: new FormControl("Customer",[Validators.required]), 


      
    });
  }

  
  get getFirstName() { return this.formGeneral.get('firstName'); }
  get getLastName() { return this.formGeneral.get('lastName'); }
  get getBirthDate() { return this.formGeneral.get('birthDate'); }
  get getPassword() { return this.formGeneral.get('password'); }
  get getEmail() { return this.formGeneral.get('email'); }
  get getProfession() { return this.formGeneral.get('profession'); }

  get mycustomerCategory() { return this.formGeneral.get('customerCategory'); } 

}
