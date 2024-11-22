import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";

@Component({
  selector: "app-client-signup",
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  // template: `
  //   <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  //     <div class="max-w-2xl mx-auto">
  //       <div class="text-center">
  //         <h2 class="text-3xl font-bold text-dark-blue">Find Your Perfect Artisan</h2>
  //         <p class="mt-2 text-gray-600">Create an account to connect with skilled craftspeople</p>
  //       </div>

  //       <div class="mt-8 bg-white py-8 px-4 shadow-md rounded-lg sm:px-10">
  //         <form [formGroup]="signupForm" (ngSubmit)="onSubmit()" class="space-y-6">
  //           <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  //             <div>
  //               <label for="fullName" class="block text-sm font-medium text-gray-700">Full Name</label>
  //               <input
  //                 type="text"
  //                 id="fullName"
  //                 formControlName="fullName"
  //                 class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-bright-blue focus:outline-none focus:ring-bright-blue">
  //             </div>

  //             <div>
  //               <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
  //               <input
  //                 type="email"
  //                 id="email"
  //                 formControlName="email"
  //                 class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-bright-blue focus:outline-none focus:ring-bright-blue">
  //             </div>

  //             <div>
  //               <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
  //               <input
  //                 type="tel"
  //                 id="phone"
  //                 formControlName="phone"
  //                 class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-bright-blue focus:outline-none focus:ring-bright-blue">
  //             </div>

  //             <div>
  //               <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
  //               <input
  //                 type="password"
  //                 id="password"
  //                 formControlName="password"
  //                 class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-bright-blue focus:outline-none focus:ring-bright-blue">
  //             </div>

  //             <div class="md:col-span-2">
  //               <label for="address" class="block text-sm font-medium text-gray-700">Address (Optional)</label>
  //               <textarea
  //                 id="address"
  //                 formControlName="address"
  //                 rows="3"
  //                 class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-bright-blue focus:outline-none focus:ring-bright-blue"></textarea>
  //             </div>

  //             <div class="md:col-span-2">
  //               <label for="profilePicture" class="block text-sm font-medium text-gray-700">Profile Picture (Optional)</label>
  //               <input
  //                 type="file"
  //                 id="profilePicture"
  //                 accept="image/*"
  //                 class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-bright-blue file:text-white hover:file:bg-light-blue">
  //             </div>
  //           </div>

  //           <div class="flex items-center">
  //             <input
  //               type="checkbox"
  //               id="terms"
  //               formControlName="terms"
  //               class="h-4 w-4 rounded border-gray-300 text-bright-blue focus:ring-bright-blue">
  //             <label for="terms" class="ml-2 block text-sm text-gray-700">
  //               I agree to the <a href="#" class="text-bright-blue hover:text-orange">Terms of Service</a> and <a href="#" class="text-bright-blue hover:text-orange">Privacy Policy</a>
  //             </label>
  //           </div>

  //           <button
  //             type="submit"
  //             [disabled]="!signupForm.valid"
  //             class="w-full btn btn-primary">
  //             Create Account
  //           </button>
  //         </form>

  //         <p class="mt-4 text-center text-sm text-gray-600">
  //           Already have an account?
  //           <a routerLink="/login" class="text-bright-blue hover:text-orange">Sign in</a>
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // `
  templateUrl: "./client-signup.component.html",
})
export class ClientSignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      fullName: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      address: [""],
      terms: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      // Handle signup
    }
  }
}
