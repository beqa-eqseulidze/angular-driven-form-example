import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  firstName:string=''
  form?:NgForm
  constructor() { }

  ngOnInit(): void {
  }

  submit(form:NgForm) {
    console.log(form)
    this.form=form.value
    }

}
