import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
    .search-section {
      background-color: white;
      padding: 2rem 0;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .search-container {
      max-width: 600px;
      margin: 0 auto;
    }
    .search-box {
      display: flex;
      gap: 1rem;
    }
    input {
      flex: 1;
      padding: 1rem;
      border: 2px solid var(--bright-blue);
      border-radius: 8px;
      font-size: 1rem;
    }
  `],
  template: `
    <section class="search-section">
      <div class="container search-container">
        <div class="search-box">
          <input type="text" placeholder="Search for artisans (e.g., carpenter, potter, blacksmith)">
          <button class="btn btn-primary">Search</button>
        </div>
      </div>
    </section>
  `
})
export class SearchComponent {}