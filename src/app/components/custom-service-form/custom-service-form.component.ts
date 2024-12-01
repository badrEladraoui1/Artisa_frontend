import { Component, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";

@Component({
  selector: "app-custom-service-form",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./custom-service-form.component.html",
})
export class CustomServiceFormComponent {
  form: FormGroup;
  @Output() submitted = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      projectType: ["", Validators.required],
      timeline: ["", Validators.required],
      budget: ["", Validators.required],
      description: ["", [Validators.required, Validators.minLength(100)]],
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      terms: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
      this.form.reset();
    }
  }
}
