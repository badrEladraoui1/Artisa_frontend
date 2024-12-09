import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-dashboard-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white shadow">
      <div class="container mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 class="text-2xl font-bold text-dark-blue">Welcome back, Sarah!</h1>
            <p class="text-gray-600">Track your services and requests</p>
          </div>
          
          <div class="grid grid-cols-3 gap-6 mt-4 md:mt-0">
            <div class="text-center">
              <div class="text-2xl font-bold text-bright-blue">5</div>
              <div class="text-sm text-gray-600">Active Services</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-orange">3</div>
              <div class="text-sm text-gray-600">Pending Requests</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-yellow">8</div>
              <div class="text-sm text-gray-600">Completed Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ClientDashboardHeaderComponent {}