import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent {
  public formValue;
  constructor() {}
  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    this.formValue = form.value;
  }
}
