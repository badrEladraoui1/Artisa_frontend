import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule, RouterModule],
  // styles: [
  //   `
  //     .hero {
  //       background: linear-gradient(rgba(2, 48, 71, 0.8), rgba(2, 48, 71, 0.9)),
  //         url("https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200&q=80");
  //       background-size: cover;
  //       background-position: center;
  //       min-height: 80vh;
  //       display: flex;
  //       align-items: center;
  //       color: white;
  //     }
  //     .hero-content {
  //       text-align: center;
  //     }
  //     h1 {
  //       font-size: 3.5rem;
  //       margin-bottom: 1.5rem;
  //       color: white;
  //     }
  //     p {
  //       font-size: 1.2rem;
  //       margin-bottom: 2rem;
  //       color: var(--light-blue);
  //       max-width: 600px;
  //       margin: 0 auto 2rem;
  //     }
  //     .cta-buttons {
  //       display: flex;
  //       gap: 1rem;
  //       justify-content: center;
  //     }
  //     .btn-secondary {
  //       background-color: transparent;
  //       border: 2px solid var(--yellow);
  //       color: var(--yellow);
  //     }
  //     .btn-secondary:hover {
  //       background-color: var(--yellow);
  //       color: var(--dark-blue);
  //     }
  //     @media (max-width: 768px) {
  //       h1 {
  //         font-size: 2.5rem;
  //       }
  //       .cta-buttons {
  //         flex-direction: column;
  //         align-items: center;
  //       }
  //     }
  //   `,
  // ],
  template: `
    <div
      class="bg-gradient-to-br from-dark-blue to-bright-blue min-h-[80vh] flex items-center"
    >
      <div class="container mx-auto px-4">
        <div class="text-center text-white">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Discover Exceptional Craftsmanship
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-light-blue max-w-2xl mx-auto">
            Connect with skilled artisans who bring your vision to life. From
            custom furniture to unique pottery, find the perfect craftsperson
            for your project.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a routerLink="/browse" class="btn btn-primary text-lg px-8 py-3">
              Find an Artisan
            </a>
            <a
              routerLink="/signup/artisan"
              class="btn bg-transparent border-2 border-yellow text-yellow hover:bg-yellow hover:text-dark-blue text-lg px-8 py-3"
            >
              Become an Artisan
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HeroComponent {}
