import { Component } from "@angular/core";

@Component({
  selector: "app-testimonials",
  standalone: true,
  styles: [
    `
      .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
      }
      .testimonial {
        background-color: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .stars {
        color: var(--yellow);
        margin-bottom: 1rem;
      }
      .author {
        margin-top: 1rem;
        font-weight: bold;
        color: var(--bright-blue);
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
        <h2 class="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <div class="text-yellow-500 mb-4">⭐⭐⭐⭐⭐</div>
            <p class="text-gray-600 mb-4">
              "Found an amazing woodworker for my custom dining table. The
              quality and attention to detail exceeded my expectations!"
            </p>
            <div class="flex items-center">
              <img
                src="https://i.pravatar.cc/40?img=1"
                alt="Customer"
                class="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h4 class="font-semibold text-dark-blue">Sarah Johnson</h4>
                <p class="text-sm text-gray-500">New York, NY</p>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-lg">
            <div class="text-yellow-500 mb-4">⭐⭐⭐⭐⭐</div>
            <p class="text-gray-600 mb-4">
              "The platform made it incredibly easy to find a skilled ceramist.
              My custom pottery pieces are absolutely beautiful!"
            </p>
            <div class="flex items-center">
              <img
                src="https://i.pravatar.cc/40?img=2"
                alt="Customer"
                class="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h4 class="font-semibold text-dark-blue">Michael Chen</h4>
                <p class="text-sm text-gray-500">Los Angeles, CA</p>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-lg">
            <div class="text-yellow-500 mb-4">⭐⭐⭐⭐⭐</div>
            <p class="text-gray-600 mb-4">
              "Working with the metalworker I found here was a fantastic
              experience. The custom gates they created are stunning!"
            </p>
            <div class="flex items-center">
              <img
                src="https://i.pravatar.cc/40?img=3"
                alt="Customer"
                class="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h4 class="font-semibold text-dark-blue">Emma Davis</h4>
                <p class="text-sm text-gray-500">Chicago, IL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class TestimonialsComponent {}
