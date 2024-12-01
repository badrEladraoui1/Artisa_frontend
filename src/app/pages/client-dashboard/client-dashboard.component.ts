import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientDashboardHeaderComponent } from './components/dashboard-header/client-dashboard-header.component';
import { ClientDashboardNavComponent } from './components/dashboard-nav/client-dashboard-nav.component';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ClientDashboardHeaderComponent,
    ClientDashboardNavComponent
  ],
  template: `
    <div class="min-h-screen bg-gray-50 pt-16">
      <app-client-dashboard-header></app-client-dashboard-header>
      <app-client-dashboard-nav></app-client-dashboard-nav>
      
      <div class="container mx-auto px-4 py-8">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class ClientDashboardComponent {}