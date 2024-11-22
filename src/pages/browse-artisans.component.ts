import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-browse-artisans',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  styles: [`
    .browse-header {
      background-color: var(--light-blue);
      padding: 2rem 0;
    }
    .filters {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }
    select {
      padding: 0.5rem;
      border: 1px solid var(--bright-blue);
      border-radius: 4px;
      min-width: 150px;
    }
    .artisans-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
      padding: 2rem 0;
    }
    .artisan-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
    .contact-info {
      font-size: 0.9rem;
      color: #666;
      margin: 0.5rem 0;
    }
    .services {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-top: 1rem;
    }
    .service-tag {
      background-color: var(--light-blue);
      color: var(--dark-blue);
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.875rem;
    }
    @media (max-width: 640px) {
      .filters {
        flex-direction: column;
      }
      select {
        width: 100%;
      }
      .artisans-grid {
        grid-template-columns: 1fr;
        padding: 1rem;
      }
    }
  `],
  template: `
    <div class="browse-header">
      <div class="container">
        <h1>Browse Artisans</h1>
        <div class="filters">
          <select>
            <option value="">Category</option>
            <option value="woodworking">Woodworking</option>
            <option value="pottery">Pottery</option>
            <option value="metalwork">Metalwork</option>
          </select>
          <select>
            <option value="">Location</option>
            <option value="new-york">New York</option>
            <option value="los-angeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
          </select>
          <select>
            <option value="">Rating</option>
            <option value="5">5 Stars</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
          </select>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="artisans-grid">
        <a [routerLink]="['/artisan', '1']" class="artisan-card">
          <img src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=500&q=80" alt="David Miller" class="artisan-image">
          <div class="artisan-info">
            <h3>David Miller</h3>
            <div class="rating">⭐⭐⭐⭐⭐ (48 reviews)</div>
            <div class="contact-info">
              <p>📍 Brooklyn, New York</p>
              <p>📞 (555) 123-4567</p>
            </div>
            <p>Master woodworker specializing in custom furniture and architectural elements.</p>
            <div class="services">
              <span class="service-tag">Custom Furniture</span>
              <span class="service-tag">Restoration</span>
            </div>
          </div>
        </a>

        <a [routerLink]="['/artisan', '2']" class="artisan-card">
          <img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&q=80" alt="Maria Rodriguez" class="artisan-image">
          <div class="artisan-info">
            <h3>Maria Rodriguez</h3>
            <div class="rating">⭐⭐⭐⭐⭐ (36 reviews)</div>
            <div class="contact-info">
              <p>📍 Los Angeles, CA</p>
              <p>📞 (555) 234-5678</p>
            </div>
            <p>Contemporary ceramist creating unique pieces for home and galleries.</p>
            <div class="services">
              <span class="service-tag">Pottery</span>
              <span class="service-tag">Ceramics</span>
            </div>
          </div>
        </a>

        <a [routerLink]="['/artisan', '3']" class="artisan-card">
          <img src="https://images.unsplash.com/photo-1556760544-74068565f05c?w=500&q=80" alt="James Thompson" class="artisan-image">
          <div class="artisan-info">
            <h3>James Thompson</h3>
            <div class="rating">⭐⭐⭐⭐½ (52 reviews)</div>
            <div class="contact-info">
              <p>📍 Chicago, IL</p>
              <p>📞 (555) 345-6789</p>
            </div>
            <p>Experienced metalworker crafting both functional and decorative pieces.</p>
            <div class="services">
              <span class="service-tag">Metalwork</span>
              <span class="service-tag">Sculpture</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  `
})
export class BrowseArtisansComponent {}