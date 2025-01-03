import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-client-dashboard-nav",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="bg-white shadow-sm">
      <div class="container mx-auto px-4">
        <div class="flex space-x-8">
          <a
            routerLink="purchases"
            routerLinkActive="text-orange border-b-2 border-orange"
            class="py-4 px-2 text-dark-blue hover:text-bright-blue transition-colors"
          >
            Purchased Services
          </a>
          <a
            routerLink="updates"
            routerLinkActive="text-orange border-b-2 border-orange"
            class="py-4 px-2 text-dark-blue hover:text-bright-blue transition-colors"
          >
            Purchases Updates
          </a>
          <a
            routerLink="completed-services"
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
export class ClientDashboardNavComponent {}
