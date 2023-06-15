import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  dayArray: Array<number> = [];
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
    this.getday();
    this.getYear();
  }
  getday() {
    for (let i = 1; i <= 31; i++) {
      this.dayArray.push(i);
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
  monthChange() {
    // console.log(this.signupForm.controls['dob_month'].value == this.monthArray[0]);
    // console.log(this.signupForm.controls['dob_month'].value);

    if (this.signupForm.controls['dob_month'].value == this.monthArray[0] || this.signupForm.controls['dob_month'].value == this.monthArray[2] || this.signupForm.controls['dob_month'].value == this.monthArray[4] || this.signupForm.controls['dob_month'].value == this.monthArray[6] || this.signupForm.controls['dob_month'].value == this.monthArray[7]
      || this.signupForm.controls['dob_month'].value == this.monthArray[9] || this.signupForm.controls['dob_month'].value == this.monthArray[11]) {
      this.dayArray = [];
      this.getday();
    } else if (this.signupForm.controls['dob_month'].value == this.monthArray[1]) {
      this.dayArray = [];
      for (let i = 1; i <= 28; i++) {
        this.dayArray.push(i);
      }
    } else if (this.signupForm.controls['dob_month'].value == this.monthArray[3] || this.signupForm.controls['dob_month'].value == this.monthArray[5]
      || this.signupForm.controls['dob_month'].value == this.monthArray[8] || this.signupForm.controls['dob_month'].value == this.monthArray[10]) {
      this.dayArray = [];
      for (let i = 1; i <= 30; i++) {
        this.dayArray.push(i);
      }
    }
  }

}
