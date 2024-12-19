import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { AuthService } from "../../components/services/auth.service";

@Component({
  selector: "app-service-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./service-card.component.html",
})
export class ServiceCardComponent {
  @Input() name = "";
  @Input() description = "";
  @Input() price = "";
  @Input() experience = "";
  @Input() images: string[] = [];
  @Input() serviceId: number = 0; // Add this to identify the specific service
  @Input() artisanId: number = 0; // Add this to identify the artisan
  @Output() interest = new EventEmitter<void>();

  constructor(private router: Router, private authService: AuthService) {}

  onInterestClick() {
    if (this.authService.isLoggedIn()) {
      // User is authenticated
      this.router.navigate(["/service-confirmation"], {
        queryParams: {
          serviceId: this.serviceId,
          artisanId: this.artisanId,
        },
      });
    } else {
      // User is not authenticated, redirect to login with return URL
      this.router.navigate(["/login"], {
        queryParams: {
          returnUrl: `/service-confirmation?serviceId=${this.serviceId}&artisanId=${this.artisanId}`,
        },
      });
    }
  }
}

// import { Component, Input, Output, EventEmitter } from "@angular/core";
// import { CommonModule } from "@angular/common";

// @Component({
//   selector: "app-service-card",
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: "./service-card.component.html",
//   // template: `
//   //   <div class="bg-white rounded-xl p-8 shadow-md">
//   //     <h3 class="text-xl font-semibold mb-4">{{name}}</h3>
//   //     <p class="text-gray-700">{{description}}</p>
//   //     <div class="text-2xl font-bold text-bright-blue my-4">{{price}}</div>
//   //     <span class="inline-block bg-yellow text-dark-blue px-4 py-1 rounded-full text-sm">{{experience}}</span>

//   //     <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//   //       <img *ngFor="let image of images"
//   //            [src]="image"
//   //            [alt]="name"
//   //            class="w-full h-48 object-cover rounded-lg">
//   //     </div>

//   //     <div class="mt-6 flex justify-end">
//   //       <button
//   //         (click)="onInterestClick()"
//   //         class="btn bg-bright-blue text-white hover:bg-light-blue transition-colors flex items-center gap-2">
//   //         <span>I'm Interested</span>
//   //         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//   //           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
//   //         </svg>
//   //       </button>
//   //     </div>
//   //   </div>
//   // `
// })
// export class ServiceCardComponent {
//   @Input() name = "";
//   @Input() description = "";
//   @Input() price = "";
//   @Input() experience = "";
//   @Input() images: string[] = [];
//   @Output() interest = new EventEmitter<void>();

//   onInterestClick() {
//     this.interest.emit();
//   }
// }

// import { Component, Input, Output, EventEmitter } from "@angular/core";
// import { CommonModule } from "@angular/common";

// @Component({
//   selector: "app-service-card",
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: "./service-card.component.html",
//   // template: `
//   //   <div class="bg-white rounded-xl p-8 shadow-md">
//   //     <h3 class="text-xl font-semibold mb-4">{{name}}</h3>
//   //     <p class="text-gray-700">{{description}}</p>
//   //     <div class="text-2xl font-bold text-bright-blue my-4">{{price}}</div>
//   //     <span class="inline-block bg-yellow text-dark-blue px-4 py-1 rounded-full text-sm">{{experience}}</span>

//   //     <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//   //       <img *ngFor="let image of images"
//   //            [src]="image"
//   //            [alt]="name"
//   //            class="w-full h-48 object-cover rounded-lg">
//   //     </div>

//   //     <div class="mt-6 flex justify-end">
//   //       <button
//   //         (click)="onInterestClick()"
//   //         class="btn bg-bright-blue text-white hover:bg-light-blue transition-colors flex items-center gap-2">
//   //         <span>I'm Interested</span>
//   //         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//   //           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
//   //         </svg>
//   //       </button>
//   //     </div>
//   //   </div>
//   // `
// })
// export class ServiceCardComponent {
//   @Input() name = "";
//   @Input() description = "";
//   @Input() price = "";
//   @Input() experience = "";
//   @Input() images: string[] = [];
//   @Output() interest = new EventEmitter<void>();

//   onInterestClick() {
//     this.interest.emit();
//   }
// }
