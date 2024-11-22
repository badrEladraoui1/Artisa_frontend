import { Component } from "@angular/core";

@Component({
  selector: "app-featured-artisans",
  standalone: true,
  styles: [
    `
      .featured-artisans {
        background-color: #f8f9fa;
      }
      .artisans-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
      }
      .artisan-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
      }
      .artisan-card:hover {
        transform: translateY(-5px);
      }
      .artisan-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
      .artisan-info {
        padding: 1.5rem;
      }
      .rating {
        color: var(--yellow);
        margin: 0.5rem 0;
      }
      .tags {
        display: flex;
        gap: 0.5rem;
        margin-top: 1rem;
      }
      .tag {
        background-color: var(--light-blue);
        color: var(--dark-blue);
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.875rem;
      }
      h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
    `,
  ],
  template: `
    <section class="bg-light-blue py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Featured Artisans</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- David Miller -->
          <div
            class="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-transform"
          >
            <img
              src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=500&q=80"
              alt="David Miller"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-dark-blue">David Miller</h3>
              <div class="text-yellow-500 my-2">⭐⭐⭐⭐⭐ (48 reviews)</div>
              <p class="text-gray-600">
                Master woodworker specializing in custom furniture
              </p>
              <div class="mt-4 flex gap-2">
                <span
                  class="bg-light-blue text-dark-blue px-3 py-1 rounded-full text-sm"
                  >Woodworking</span
                >
                <span
                  class="bg-light-blue text-dark-blue px-3 py-1 rounded-full text-sm"
                  >Custom</span
                >
              </div>
            </div>
          </div>

          <!-- Maria Rodriguez -->
          <div
            class="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-transform"
          >
            <img
              src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&q=80"
              alt="Maria Rodriguez"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-dark-blue">
                Maria Rodriguez
              </h3>
              <div class="text-yellow-500 my-2">⭐⭐⭐⭐⭐ (36 reviews)</div>
              <p class="text-gray-600">
                Contemporary ceramist creating unique pieces
              </p>
              <div class="mt-4 flex gap-2">
                <span
                  class="bg-light-blue text-dark-blue px-3 py-1 rounded-full text-sm"
                  >Pottery</span
                >
                <span
                  class="bg-light-blue text-dark-blue px-3 py-1 rounded-full text-sm"
                  >Ceramics</span
                >
              </div>
            </div>
          </div>

          <!-- James Thompson -->
          <div
            class="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-transform"
          >
            <img
              src="https://images.unsplash.com/photo-1556760544-74068565f05c?w=500&q=80"
              alt="James Thompson"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-dark-blue">
                James Thompson
              </h3>
              <div class="text-yellow-500 my-2">⭐⭐⭐⭐½ (52 reviews)</div>
              <p class="text-gray-600">
                Expert metalworker crafting unique pieces
              </p>
              <div class="mt-4 flex gap-2">
                <span
                  class="bg-light-blue text-dark-blue px-3 py-1 rounded-full text-sm"
                  >Metalwork</span
                >
                <span
                  class="bg-light-blue text-dark-blue px-3 py-1 rounded-full text-sm"
                  >Sculpture</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class FeaturedArtisansComponent {}
