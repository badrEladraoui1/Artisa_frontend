import { Component } from "@angular/core";

@Component({
  selector: "app-categories",
  standalone: true,
  styles: [
    `
      .categories-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
      }
      .category-card {
        background-color: white;
        border-radius: 12px;
        padding: 2rem;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
      }
      .category-card:hover {
        transform: translateY(-5px);
      }
      h2 {
        color: var(--dark-blue);
        margin-bottom: 2rem;
        text-align: center;
      }
      .icon {
        font-size: 2.5rem;
        color: var(--bright-blue);
        margin-bottom: 1rem;
      }
    `,
  ],
  templateUrl: "./categories.component.html",
  // template: `
  //   <section class="section">
  //     <div class="container">
  //       <h2>Popular Categories</h2>
  //       <div class="categories-grid">
  //         <div class="category-card">
  //           <div class="icon">🔨</div>
  //           <h3>Carpentry</h3>
  //         </div>
  //         <div class="category-card">
  //           <div class="icon">🎨</div>
  //           <h3>Pottery</h3>
  //         </div>
  //         <div class="category-card">
  //           <div class="icon">⚒️</div>
  //           <h3>Blacksmithing</h3>
  //         </div>
  //         <div class="category-card">
  //           <div class="icon">🧵</div>
  //           <h3>Textiles</h3>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // `
})
export class CategoriesComponent {}
