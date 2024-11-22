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
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  // template: `
  //   <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  //     <div class="max-w-md mx-auto">
  //       <div class="text-center">
  //         <h2 class="text-3xl font-bold text-dark-blue">Welcome Back</h2>
  //         <p class="mt-2 text-gray-600">Sign in to your account</p>
  //       </div>

  //       <div class="mt-8 bg-white py-8 px-4 shadow-md rounded-lg sm:px-10">
  //         <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-6">
  //           <div>
  //             <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
  //             <input
  //               type="email"
  //               id="email"
  //               formControlName="email"
  //               class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-bright-blue focus:outline-none focus:ring-bright-blue"
  //               placeholder="your@email.com">
  //           </div>

  //           <div>
  //             <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
  //             <input
  //               type="password"
  //               id="password"
  //               formControlName="password"
  //               class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-bright-blue focus:outline-none focus:ring-bright-blue"
  //               placeholder="••••••••">
  //           </div>

  //           <div class="flex items-center justify-between">
  //             <div class="flex items-center">
  //               <input
  //                 type="checkbox"
  //                 id="remember"
  //                 class="h-4 w-4 rounded border-gray-300 text-bright-blue focus:ring-bright-blue">
  //               <label for="remember" class="ml-2 block text-sm text-gray-700">Remember me</label>
  //             </div>
  //             <a href="#" class="text-sm text-bright-blue hover:text-orange">Forgot password?</a>
  //           </div>

  //           <button
  //             type="submit"
  //             [disabled]="!loginForm.valid"
  //             class="w-full btn btn-primary">
  //             Sign In
  //           </button>
  //         </form>

  //         <div class="mt-6">
  //           <div class="relative">
  //             <div class="absolute inset-0 flex items-center">
  //               <div class="w-full border-t border-gray-300"></div>
  //             </div>
  //             <div class="relative flex justify-center text-sm">
  //               <span class="bg-white px-2 text-gray-500">Don't have an account?</span>
  //             </div>
  //           </div>

  //           <div class="mt-6 grid grid-cols-2 gap-4">
  //             <a routerLink="/signup/client"
  //                class="btn bg-bright-blue text-white hover:bg-light-blue text-center">
  //               Find an Artisan
  //             </a>
  //             <a routerLink="/signup/artisan"
  //                class="btn bg-orange text-white hover:bg-yellow text-center">
  //               Become an Artisan
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // `
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Handle login
    }
  }
}
