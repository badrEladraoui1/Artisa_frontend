import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./about.component.html",
  // template: `
  //   <!-- Hero Section -->
  //   <div
  //     class="bg-gradient-to-br from-dark-blue to-bright-blue text-white pt-20 pb-16"
  //   >
  //     <div class="container text-center">
  //       <h1 class="text-4xl md:text-5xl font-bold mb-6">About Artisa</h1>
  //       <p class="text-xl text-light-blue max-w-2xl mx-auto">
  //         Connecting skilled craftspeople with those who appreciate authentic,
  //         handcrafted excellence.
  //       </p>
  //     </div>
  //   </div>

  //   <!-- Mission Section -->
  //   <section class="py-16">
  //     <div class="container">
  //       <div class="grid md:grid-cols-2 gap-12 items-center">
  //         <div>
  //           <h2 class="text-3xl font-bold text-dark-blue mb-6">Our Mission</h2>
  //           <p class="text-lg text-gray-700 mb-4">
  //             At Artisa, we're passionate about preserving and promoting
  //             traditional craftsmanship while embracing modern connectivity. Our
  //             platform bridges the gap between skilled artisans and those
  //             seeking authentic, handcrafted products and services.
  //           </p>
  //           <p class="text-lg text-gray-700">
  //             We believe in supporting local craftspeople, maintaining
  //             traditional skills, and fostering a community that values quality,
  //             creativity, and sustainable practices.
  //           </p>
  //         </div>
  //         <img
  //           src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800"
  //           alt="Craftsman at work"
  //           class="rounded-xl shadow-lg"
  //         />
  //       </div>
  //     </div>
  //   </section>

  //   <!-- Values Section -->
  //   <section class="bg-light-blue py-16">
  //     <div class="container">
  //       <h2 class="text-3xl font-bold text-dark-blue text-center mb-12">
  //         Our Values
  //       </h2>
  //       <div class="grid md:grid-cols-3 gap-8">
  //         <div class="bg-white p-8 rounded-xl shadow-md">
  //           <div class="text-4xl mb-4">🤝</div>
  //           <h3 class="text-xl font-bold text-dark-blue mb-4">Community</h3>
  //           <p class="text-gray-700">
  //             Building strong connections between artisans and customers,
  //             fostering a supportive creative community.
  //           </p>
  //         </div>
  //         <div class="bg-white p-8 rounded-xl shadow-md">
  //           <div class="text-4xl mb-4">✨</div>
  //           <h3 class="text-xl font-bold text-dark-blue mb-4">Quality</h3>
  //           <p class="text-gray-700">
  //             Maintaining high standards of craftsmanship and ensuring customer
  //             satisfaction.
  //           </p>
  //         </div>
  //         <div class="bg-white p-8 rounded-xl shadow-md">
  //           <div class="text-4xl mb-4">🌱</div>
  //           <h3 class="text-xl font-bold text-dark-blue mb-4">
  //             Sustainability
  //           </h3>
  //           <p class="text-gray-700">
  //             Promoting sustainable practices and supporting eco-friendly
  //             crafting methods.
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </section>

  //   <!-- Team Section -->
  //   <section class="py-16">
  //     <div class="container">
  //       <h2 class="text-3xl font-bold text-dark-blue text-center mb-12">
  //         Our Team
  //       </h2>
  //       <div class="grid md:grid-cols-4 gap-8">
  //         <div class="text-center">
  //           <img
  //             src="https://i.pravatar.cc/150?img=1"
  //             alt="Team member"
  //             class="w-32 h-32 rounded-full mx-auto mb-4"
  //           />
  //           <h3 class="font-bold text-dark-blue">Sarah Johnson</h3>
  //           <p class="text-gray-600">Founder & CEO</p>
  //         </div>
  //         <div class="text-center">
  //           <img
  //             src="https://i.pravatar.cc/150?img=2"
  //             alt="Team member"
  //             class="w-32 h-32 rounded-full mx-auto mb-4"
  //           />
  //           <h3 class="font-bold text-dark-blue">Michael Chen</h3>
  //           <p class="text-gray-600">Head of Operations</p>
  //         </div>
  //         <div class="text-center">
  //           <img
  //             src="https://i.pravatar.cc/150?img=3"
  //             alt="Team member"
  //             class="w-32 h-32 rounded-full mx-auto mb-4"
  //           />
  //           <h3 class="font-bold text-dark-blue">Emma Davis</h3>
  //           <p class="text-gray-600">Community Manager</p>
  //         </div>
  //         <div class="text-center">
  //           <img
  //             src="https://i.pravatar.cc/150?img=4"
  //             alt="Team member"
  //             class="w-32 h-32 rounded-full mx-auto mb-4"
  //           />
  //           <h3 class="font-bold text-dark-blue">James Wilson</h3>
  //           <p class="text-gray-600">Technical Lead</p>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // `,
})
export class AboutComponent {}
