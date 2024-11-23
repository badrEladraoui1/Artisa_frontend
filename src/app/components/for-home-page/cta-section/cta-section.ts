import { Component } from "@angular/core";
// import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
@Component({
  selector: "app-cta-section",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./cta-section.html",
  // template: `<section
  //   class="py-16 bg-gradient-to-br from-dark-blue to-bright-blue text-white"
  // >
  //   <div class="container mx-auto px-4 text-center">
  //     <h2 class="text-3xl md:text-4xl font-bold mb-6">
  //       Ready to Start Your Project?
  //     </h2>
  //     <p class="text-xl text-light-blue mb-8 max-w-2xl mx-auto">
  //       Join our community of artisans and customers bringing creative visions
  //       to life
  //     </p>
  //     <div class="flex flex-col sm:flex-row gap-4 justify-center">
  //       <a
  //         routerLink="/signup/client"
  //         class="btn btn-primary text-lg px-8 py-3"
  //       >
  //         Join us to find an Artisan
  //       </a>
  //       <a
  //         routerLink="/signup/artisan"
  //         class="btn bg-transparent border-2 border-yellow text-yellow hover:bg-yellow hover:text-dark-blue text-lg px-8 py-3"
  //       >
  //         Join as an Artisan
  //       </a>
  //     </div>
  //   </div>
  // </section>`,
})
export class CtaSectionComponent {}
