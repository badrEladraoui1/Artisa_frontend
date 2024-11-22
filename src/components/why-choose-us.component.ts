import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  styles: [`
    .why-choose-us {
      background-color: var(--dark-blue);
      color: white;
    }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
      margin-top: 2rem;
    }
    .feature {
      text-align: center;
    }
    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: var(--yellow);
    }
    h2 {
      text-align: center;
      margin-bottom: 2rem;
      color: white;
    }
    .feature h3 {
      color: var(--light-blue);
      margin-bottom: 1rem;
    }
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-top: 4rem;
      text-align: center;
    }
    .stat-number {
      font-size: 2.5rem;
      font-weight: bold;
      color: var(--yellow);
      margin-bottom: 0.5rem;
    }
  `],
  template: `
    <section class="section why-choose-us">
      <div class="container">
        <h2>Why Choose ArtisanHub</h2>
        <div class="features-grid">
          <div class="feature">
            <div class="feature-icon">🛡️</div>
            <h3>Verified Artisans</h3>
            <p>Every artisan is thoroughly vetted and verified for quality and professionalism.</p>
          </div>
          <div class="feature">
            <div class="feature-icon">💫</div>
            <h3>Quality Guaranteed</h3>
            <p>Our satisfaction guarantee ensures you get exactly what you're looking for.</p>
          </div>
          <div class="feature">
            <div class="feature-icon">🤝</div>
            <h3>Direct Communication</h3>
            <p>Connect directly with artisans to discuss your project requirements.</p>
          </div>
        </div>
        <div class="stats">
          <div>
            <div class="stat-number">5000+</div>
            <p>Verified Artisans</p>
          </div>
          <div>
            <div class="stat-number">15K+</div>
            <p>Completed Projects</p>
          </div>
          <div>
            <div class="stat-number">98%</div>
            <p>Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class WhyChooseUsComponent {}