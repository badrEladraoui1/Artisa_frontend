import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  styles: [`
    footer {
      background-color: var(--dark-blue);
      color: white;
      padding: 4rem 0 2rem;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }
    h3 {
      margin-bottom: 1rem;
      color: var(--light-blue);
    }
    ul {
      list-style: none;
    }
    li {
      margin-bottom: 0.5rem;
    }
    a {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    a:hover {
      color: var(--yellow);
    }
    .copyright {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
  `],
  template: `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div>
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Safety</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3>Artisans</h3>
            <ul>
              <li><a href="#">Join as Artisan</a></li>
              <li><a href="#">Success Stories</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
          <div>
            <h3>Connect</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          © 2024 Artisan Platform. All rights reserved.
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}