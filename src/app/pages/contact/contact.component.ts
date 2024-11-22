import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  // template: `
  //   <!-- Hero Section -->
  //   <div class="bg-gradient-to-br from-dark-blue to-bright-blue text-white pt-20 pb-16">
  //     <div class="container text-center">
  //       <h1 class="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
  //       <p class="text-xl text-light-blue max-w-2xl mx-auto">Have questions? We're here to help. Reach out to our team.</p>
  //     </div>
  //   </div>

  //   <div class="container py-16">
  //     <div class="grid lg:grid-cols-2 gap-12">
  //       <!-- Contact Form -->
  //       <div class="bg-white p-8 rounded-xl shadow-md">
  //         <h2 class="text-2xl font-bold text-dark-blue mb-6">Send us a Message</h2>
  //         <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
  //           <div>
  //             <label class="block text-gray-700 mb-2" for="name">Full Name</label>
  //             <input
  //               type="text"
  //               id="name"
  //               formControlName="name"
  //               class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-blue focus:border-bright-blue"
  //               placeholder="Your name">
  //           </div>

  //           <div>
  //             <label class="block text-gray-700 mb-2" for="email">Email</label>
  //             <input
  //               type="email"
  //               id="email"
  //               formControlName="email"
  //               class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-blue focus:border-bright-blue"
  //               placeholder="your@email.com">
  //           </div>

  //           <div>
  //             <label class="block text-gray-700 mb-2" for="subject">Subject</label>
  //             <input
  //               type="text"
  //               id="subject"
  //               formControlName="subject"
  //               class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-blue focus:border-bright-blue"
  //               placeholder="How can we help?">
  //           </div>

  //           <div>
  //             <label class="block text-gray-700 mb-2" for="message">Message</label>
  //             <textarea
  //               id="message"
  //               formControlName="message"
  //               rows="5"
  //               class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-blue focus:border-bright-blue"
  //               placeholder="Your message here..."></textarea>
  //           </div>

  //           <button
  //             type="submit"
  //             [disabled]="!contactForm.valid"
  //             class="w-full btn btn-primary">
  //             Send Message
  //           </button>
  //         </form>
  //       </div>

  //       <!-- Contact Information -->
  //       <div class="space-y-8">
  //         <div class="bg-white p-8 rounded-xl shadow-md">
  //           <h3 class="text-xl font-bold text-dark-blue mb-4">Office Location</h3>
  //           <p class="text-gray-700">
  //             123 Artisan Street<br>
  //             Creative District<br>
  //             New York, NY 10001
  //           </p>
  //         </div>

  //         <div class="bg-white p-8 rounded-xl shadow-md">
  //           <h3 class="text-xl font-bold text-dark-blue mb-4">Contact Information</h3>
  //           <div class="space-y-4">
  //             <p class="flex items-center text-gray-700">
  //               <span class="mr-3">📞</span>
  //               (555) 123-4567
  //             </p>
  //             <p class="flex items-center text-gray-700">
  //               <span class="mr-3">📧</span>
  //               contact&#64;artisa.com
  //             </p>
  //             <p class="flex items-center text-gray-700">
  //               <span class="mr-3">⏰</span>
  //               Mon-Fri: 9:00 AM - 6:00 PM
  //             </p>
  //           </div>
  //         </div>

  //         <div class="bg-white p-8 rounded-xl shadow-md">
  //           <h3 class="text-xl font-bold text-dark-blue mb-4">Follow Us</h3>
  //           <div class="flex space-x-4">
  //             <a href="#" class="text-bright-blue hover:text-orange transition-colors">Facebook</a>
  //             <a href="#" class="text-bright-blue hover:text-orange transition-colors">Twitter</a>
  //             <a href="#" class="text-bright-blue hover:text-orange transition-colors">Instagram</a>
  //             <a href="#" class="text-bright-blue hover:text-orange transition-colors">LinkedIn</a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // `
  templateUrl: "./contact.component.html",
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      subject: ["", Validators.required],
      message: ["", [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Handle form submission
    }
  }
}
