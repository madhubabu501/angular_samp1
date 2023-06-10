import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  quantities: Array<number> = [];
  monthArray: Array<string> = ["Jan", "Feb", "Mar", "Apr", "may", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  yearArray: Array<number> = [];
  signupForm!: FormGroup;
  constructor(private formbuilder: FormBuilder) { }
  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mobilenumber: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      dob_day: ['', Validators.required],
      dob_month: ['', Validators.required],
      dob_year: ['', Validators.required]
    })
    this.getQuantity();
    this.getYear();
  }
  getQuantity() {
    for (let i = 1; i <= 31; i++) {
      this.quantities.push(i);
    }
  }
  getYear() {
    for (let i = 1850; i <= 2023; i++) {
      this.yearArray.push(i);
    }
  }
  signup() {
    console.log(this.signupForm.value);
  }

}
