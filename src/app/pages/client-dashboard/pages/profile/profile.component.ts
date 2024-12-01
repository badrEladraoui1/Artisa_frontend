import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-xl font-bold text-dark-blue mb-6">Profile Settings</h2>

      <form [formGroup]="profileForm" (ngSubmit)="onSubmit()" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700">Full Name</label>
            <input 
              type="text" 
              formControlName="name"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bright-blue focus:ring-bright-blue">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              formControlName="email"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bright-blue focus:ring-bright-blue">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Phone</label>
            <input 
              type="tel" 
              formControlName="phone"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bright-blue focus:ring-bright-blue">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Profile Picture URL</label>
            <input 
              type="text" 
              formControlName="profilePicture"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bright-blue focus:ring-bright-blue">
          </div>

          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700">Address</label>
            <textarea 
              formControlName="address"
              rows="3"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bright-blue focus:ring-bright-blue"></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">New Password</label>
            <input 
              type="password" 
              formControlName="newPassword"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bright-blue focus:ring-bright-blue">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Confirm New Password</label>
            <input 
              type="password" 
              formControlName="confirmPassword"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bright-blue focus:ring-bright-blue">
          </div>
        </div>

        <div class="flex justify-end">
          <button 
            type="submit"
            [disabled]="!profileForm.valid"
            class="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  `
})
export class ProfileComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['Sarah Johnson', Validators.required],
      email: ['sarah.johnson@example.com', [Validators.required, Validators.email]],
      phone: ['(555) 987-6543', Validators.required],
      profilePicture: ['https://i.pravatar.cc/150?img=1'],
      address: ['123 Main St, Brooklyn, NY 11201', Validators.required],
      newPassword: [''],
      confirmPassword: ['']
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('newPassword')?.value === g.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Save profile:', this.profileForm.value);
    }
  }
}