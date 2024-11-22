import { Component } from "@angular/core";

@Component({
  selector: "app-how-it-works",
  standalone: true,
  styles: [
    `
      .how-it-works {
        background-color: var(--light-blue);
      }
      .steps {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
      }
      .step {
        text-align: center;
        padding: 2rem;
      }
      .step-number {
        background-color: var(--orange);
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1rem;
        font-weight: bold;
      }
      h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
    `,
  ],
  template: `
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Step 1 -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
            >
              1
            </div>
            <h3 class="text-xl font-semibold text-dark-blue mb-4">
              Browse & Search
            </h3>
            <p class="text-gray-600">
              Explore our curated selection of skilled artisans and find the
              perfect match for your project
            </p>
          </div>

          <!-- Step 2 -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
            >
              2
            </div>
            <h3 class="text-xl font-semibold text-dark-blue mb-4">Connect</h3>
            <p class="text-gray-600">
              Contact artisans directly to discuss your project requirements and
              get quotes
            </p>
          </div>

          <!-- Step 3 -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
            >
              3
            </div>
            <h3 class="text-xl font-semibold text-dark-blue mb-4">
              Collaborate
            </h3>
            <p class="text-gray-600">
              Work closely with your chosen artisan to refine your project
              details and timeline
            </p>
          </div>

          <!-- Step 4 -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
            >
              4
            </div>
            <h3 class="text-xl font-semibold text-dark-blue mb-4">Create</h3>
            <p class="text-gray-600">
              Watch your vision come to life through skilled craftsmanship and
              attention to detail
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HowItWorksComponent {}
