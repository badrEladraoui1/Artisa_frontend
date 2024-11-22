import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artisan-detail',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    .hero {
      background-color: var(--light-blue);
      padding: 3rem 0;
    }
    .profile {
      display: flex;
      gap: 2rem;
      align-items: start;
    }
    .profile-image {
      width: 300px;
      height: 300px;
      object-fit: cover;
      border-radius: 12px;
    }
    .profile-info {
      flex: 1;
    }
    .contact-info {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      margin-top: 1rem;
    }
    .services {
      padding: 3rem 0;
    }
    .service-card {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .price {
      color: var(--bright-blue);
      font-size: 1.5rem;
      font-weight: bold;
      margin: 1rem 0;
    }
    .experience-level {
      display: inline-block;
      background: var(--yellow);
      color: var(--dark-blue);
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.875rem;
      margin-top: 0.5rem;
    }
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 2rem;
    }
    .gallery img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
    }
    @media (max-width: 768px) {
      .profile {
        flex-direction: column;
      }
      .profile-image {
        width: 100%;
        height: 250px;
      }
      .gallery {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      }
    }
  `],
  template: `
    <div class="hero">
      <div class="container">
        <div class="profile">
          <img src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=500&q=80" alt="David Miller" class="profile-image">
          <div class="profile-info">
            <h1>David Miller</h1>
            <div class="rating">⭐⭐⭐⭐⭐ (48 reviews)</div>
            <p>Master woodworker specializing in custom furniture and architectural elements.</p>
            <div class="contact-info">
              <h3>Contact Information</h3>
              <p>📍 Brooklyn, New York</p>
              <p>📞 (555) 123-4567</p>
              <p>📧 david.miller&#64;artisanhub.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="services">
      <div class="container">
        <h2>Services Offered</h2>
        
        <div class="service-card">
          <h3>Custom Furniture Design</h3>
          <p>Bespoke furniture pieces tailored to your specific needs and style preferences.</p>
          <div class="price">From $1,500</div>
          <span class="experience-level">20+ years experience</span>
          <div class="gallery">
            <img src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=500&q=80" alt="Furniture 1">
            <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&q=80" alt="Furniture 2">
            <img src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=500&q=80" alt="Furniture 3">
          </div>
        </div>

        <div class="service-card">
          <h3>Furniture Restoration</h3>
          <p>Expert restoration of antique and vintage furniture pieces.</p>
          <div class="price">From $500</div>
          <span class="experience-level">15+ years experience</span>
          <div class="gallery">
            <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&q=80" alt="Restoration 1">
            <img src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=500&q=80" alt="Restoration 2">
            <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&q=80" alt="Restoration 3">
          </div>
        </div>
      </div>
    </section>
  `
})
export class ArtisanDetailComponent {}