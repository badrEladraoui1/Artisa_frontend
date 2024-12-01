import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-service-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 class="text-xl font-bold text-dark-blue mb-4">Add New Service</h3>
        
        <form [formGroup]="serviceForm" (ngSubmit)="onSubmit()" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Service Name</label>
            <input 
              type="text" 
              formControlName="name"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bright-blue focus:ring-bright-blue">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Description</label>
            <textarea 
              formControlName="description"
              rows="3"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bright-blue focus:ring-bright-blue"></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Price</label>
            <input 
              type="text" 
              formControlName="price"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bright-blue focus:ring-bright-blue">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Image URL</label>
            <input 
              type="text" 
              formControlName="image"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bright-blue focus:ring-bright-blue">
          </div>

          <div class="flex justify-end gap-2 mt-6">
            <button 
              type="button"
              (click)="close.emit()"
              class="btn bg-gray-200 text-gray-700 hover:bg-gray-300">
              Cancel
            </button>
            <button 
              type="submit"
              [disabled]="!serviceForm.valid"
              class="btn btn-primary">
              Save Service
            </button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class AddServiceModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  serviceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.serviceForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.serviceForm.valid) {
      this.save.emit(this.serviceForm.value);
    }
  }
}