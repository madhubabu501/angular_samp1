import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotlogin',
  templateUrl: './forgotlogin.component.html',
  styleUrls: ['./forgotlogin.component.css']
})
export class ForgotloginComponent implements OnInit {
  forgotForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email_mobile: ['', Validators.required]
    })
  }
  searchmember() {
    console.log(this.forgotForm.value);
  }
}
