import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DashboardHeaderComponent } from "./components/dashboard-header/dashboard-header.component";
import { DashboardNavComponent } from "./components/dashboard-nav/dashboard-nav.component";

@Component({
  selector: "app-artisan-dashboard",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DashboardHeaderComponent,
    DashboardNavComponent,
  ],
  template: `
    <div class="min-h-screen bg-gray-50 pt-16">
      <app-dashboard-header></app-dashboard-header>
      <app-dashboard-nav></app-dashboard-nav>

      <div class="container mx-auto px-4 py-8">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class ArtisanDashboardComponent {}
