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
  // template: `
  //   <div class="bg-white rounded-xl p-8 shadow-md">
  //     <div class="flex items-center gap-3 mb-6">
  //       <h3 class="text-xl font-semibold">Request Custom Service</h3>
  //       <span class="bg-orange text-white px-3 py-1 rounded-full text-sm">Premium</span>
  //     </div>

  //     <p class="text-gray-600 mb-6">
  //       Need something unique? Describe your project, and we'll work together to create exactly what you're looking for.
  //       <span class="block mt-2 text-sm text-orange">
  //         Note: Custom services are priced higher than standard offerings due to their unique nature and complexity.
  //       </span>
  //     </p>

  //     <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-6">
  //       <div>
  //         <label class="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
  //         <select
  //           formControlName="projectType"
  //           class="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bright-blue focus:border-bright-blue">
  //           <option value="">Select a project type</option>
  //           <option value="furniture">Custom Furniture</option>
  //           <option value="restoration">Restoration</option>
  //           <option value="architectural">Architectural Elements</option>
  //           <option value="other">Other (specify in description)</option>
  //         </select>
  //       </div>

  //       <div>
  //         <label class="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
  //         <select
  //           formControlName="timeline"
  //           class="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bright-blue focus:border-bright-blue">
  //           <option value="">Select preferred timeline</option>
  //           <option value="urgent">Urgent (1-2 weeks)</option>
  //           <option value="standard">Standard (3-4 weeks)</option>
  //           <option value="flexible">Flexible (5+ weeks)</option>
  //         </select>
  //       </div>

  //       <div>
  //         <label class="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
  //         <select
  //           formControlName="budget"
  //           class="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bright-blue focus:border-bright-blue">
  //           <option value="">Select budget range</option>
  //           <option value="1000-2500">$1,000 - $2,500</option>
  //           <option value="2500-5000">$2,500 - $5,000</option>
  //           <option value="5000-10000">$5,000 - $10,000</option>
  //           <option value="10000+">$10,000+</option>
  //         </select>
  //       </div>

  //       <div>
  //         <label class="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
  //         <textarea
  //           formControlName="description"
  //           rows="5"
  //           class="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bright-blue focus:border-bright-blue"
  //           placeholder="Please provide detailed information about your project, including dimensions, materials, style preferences, and any specific requirements..."></textarea>
  //       </div>

  //       <div>
  //         <label class="block text-sm font-medium text-gray-700 mb-2">Reference Images (Optional)</label>
  //         <input
  //           type="file"
  //           multiple
  //           accept="image/*"
  //           class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-bright-blue file:text-white hover:file:bg-light-blue">
  //         <p class="mt-1 text-xs text-gray-500">Upload up to 5 images for reference</p>
  //       </div>

  //       <div>
  //         <label class="block text-sm font-medium text-gray-700 mb-2">Contact Information</label>
  //         <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  //           <input
  //             type="text"
  //             formControlName="name"
  //             placeholder="Your Name"
  //             class="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bright-blue focus:border-bright-blue">
  //           <input
  //             type="email"
  //             formControlName="email"
  //             placeholder="Your Email"
  //             class="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bright-blue focus:border-bright-blue">
  //         </div>
  //       </div>

  //       <div class="flex items-start">
  //         <input
  //           type="checkbox"
  //           id="terms"
  //           formControlName="terms"
  //           class="mt-1 h-4 w-4 rounded border-gray-300 text-bright-blue focus:ring-bright-blue">
  //         <label for="terms" class="ml-2 text-sm text-gray-600">
  //           I understand that this is a custom request and the final price will be determined based on project requirements and complexity.
  //         </label>
  //       </div>

  //       <button
  //         type="submit"
  //         [disabled]="!form.valid"
  //         class="w-full btn btn-primary">
  //         Submit Custom Request
  //       </button>
  //     </form>
  //   </div>
  // `
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
