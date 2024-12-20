import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./footer.component.html",
  // template: `
  //   <footer class="bg-dark-blue text-white py-16">
  //     <div class="max-w-7xl mx-auto px-4">
  //       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  //         <div>
  //           <h3 class="text-xl font-semibold mb-4 text-light-blue">Company</h3>
  //           <ul class="space-y-2">
  //             <li><a routerLink="/about" class="hover:text-yellow transition-colors">About Us</a></li>
  //             <li><a routerLink="/careers" class="hover:text-yellow transition-colors">Careers</a></li>
  //             <li><a routerLink="/press" class="hover:text-yellow transition-colors">Press</a></li>
  //           </ul>
  //         </div>
  //         <div>
  //           <h3 class="text-xl font-semibold mb-4 text-light-blue">Support</h3>
  //           <ul class="space-y-2">
  //             <li><a routerLink="/help" class="hover:text-yellow transition-colors">Help Center</a></li>
  //             <li><a routerLink="/safety" class="hover:text-yellow transition-colors">Safety</a></li>
  //             <li><a routerLink="/terms" class="hover:text-yellow transition-colors">Terms of Service</a></li>
  //           </ul>
  //         </div>
  //         <div>
  //           <h3 class="text-xl font-semibold mb-4 text-light-blue">Artisans</h3>
  //           <ul class="space-y-2">
  //             <li><a routerLink="/signup/artisan" class="hover:text-yellow transition-colors">Join as Artisan</a></li>
  //             <li><a routerLink="/success-stories" class="hover:text-yellow transition-colors">Success Stories</a></li>
  //             <li><a routerLink="/resources" class="hover:text-yellow transition-colors">Resources</a></li>
  //           </ul>
  //         </div>
  //         <div>
  //           <h3 class="text-xl font-semibold mb-4 text-light-blue">Connect</h3>
  //           <ul class="space-y-2">
  //             <li><a routerLink="/contact" class="hover:text-yellow transition-colors">Contact Us</a></li>
  //             <li><a href="#" class="hover:text-yellow transition-colors">Facebook</a></li>
  //             <li><a href="#" class="hover:text-yellow transition-colors">Instagram</a></li>
  //           </ul>
  //         </div>
  //       </div>
  //       <div class="text-center mt-12 pt-8 border-t border-gray-700">
  //         © 2024 ArtisanHub. All rights reserved.
  //       </div>
  //     </div>
  //   </footer>
  // `
})
export class FooterComponent {}
