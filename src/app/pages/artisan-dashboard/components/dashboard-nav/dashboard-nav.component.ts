import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-dashboard-nav",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="bg-white shadow-sm">
      <div class="container mx-auto px-4">
        <div class="flex space-x-8">
          <a
            routerLink="services"
            routerLinkActive="text-orange border-b-2 border-orange"
            class="py-4 px-2 text-dark-blue hover:text-bright-blue transition-colors"
          >
            Services
          </a>
          <a
            routerLink="requests"
            routerLinkActive="text-orange border-b-2 border-orange"
            class="py-4 px-2 text-dark-blue hover:text-bright-blue transition-colors"
          >
            Client Requests
          </a>
          <a
            routerLink="completed-services-artisan"
            routerLinkActive="text-orange border-b-2 border-orange"
            class="py-4 px-2 text-dark-blue hover:text-bright-blue transition-colors"
          >
            Completed Services
          </a>
          <a
            routerLink="profile"
            routerLinkActive="text-orange border-b-2 border-orange"
            class="py-4 px-2 text-dark-blue hover:text-bright-blue transition-colors"
          >
            Profile Settings
          </a>
        </div>
      </div>
    </nav>
  `,
})
export class DashboardNavComponent {}
