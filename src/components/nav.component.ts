import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  styles: [`
    nav {
      background-color: white;
      padding: 1rem 0;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--dark-blue);
      text-decoration: none;
    }
    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }
    .nav-link {
      color: var(--dark-blue);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }
    .nav-link:hover {
      color: var(--bright-blue);
    }
    .nav-link.btn {
      color: white;
    }
    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--dark-blue);
    }
    @media (max-width: 768px) {
      .mobile-menu-btn {
        display: block;
      }
      .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        padding: 1rem;
        flex-direction: column;
        align-items: stretch;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .nav-links.active {
        display: flex;
      }
      .nav-link {
        padding: 0.5rem 0;
        text-align: center;
      }
    }
  `],
  template: `
    <nav>
      <div class="container nav-container">
        <a routerLink="/" class="logo">ArtisanHub</a>
        <button class="mobile-menu-btn" (click)="toggleMenu()">☰</button>
        <div class="nav-links" [class.active]="isMenuOpen">
          <a routerLink="/" class="nav-link">Home</a>
          <a routerLink="/browse" class="nav-link">Browse Artisans</a>
          <a routerLink="/about" class="nav-link">About Us</a>
          <a routerLink="/contact" class="nav-link">Contact</a>
          <a routerLink="/signup" class="nav-link btn btn-primary">Sign Up</a>
        </div>
      </div>
    </nav>
  `
})
export class NavComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}