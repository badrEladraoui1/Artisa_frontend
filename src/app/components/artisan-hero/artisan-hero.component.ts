import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-artisan-hero",
  standalone: true,
  imports: [CommonModule],
  // template: `
  //   <div class="bg-light-blue py-12 pt-20">
  //     <div class="container mx-auto px-4">
  //       <div class="flex flex-col lg:flex-row gap-8">
  //         <img
  //           [src]="image"
  //           [alt]="name"
  //           class="w-full lg:w-[300px] h-[250px] lg:h-[300px] object-cover rounded-xl">

  //         <div class="flex-1">
  //           <h1 class="text-3xl md:text-4xl font-bold text-dark-blue">{{name}}</h1>
  //           <div class="text-yellow my-4">{{rating}}</div>
  //           <p class="text-lg text-gray-700">{{description}}</p>

  //           <div class="bg-white p-6 rounded-lg mt-6 shadow-sm">
  //             <h3 class="text-xl font-semibold mb-4">Contact Information</h3>
  //             <div class="space-y-2">
  //               <p>📍 {{location}}</p>
  //               <p>📞 {{phone}}</p>
  //               <p>📧 {{email}}</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // `
  templateUrl: "./artisan-hero.component.html",
})
export class ArtisanHeroComponent {
  @Input() image = "";
  @Input() name = "";
  @Input() rating = "";
  @Input() description = "";
  @Input() location = "";
  @Input() phone = "";
  @Input() email = "";
}
