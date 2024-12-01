import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-xl font-bold text-dark-blue mb-6">Service Requests</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div *ngFor="let request of serviceRequests" class="bg-gray-50 rounded-lg p-4">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-lg font-semibold text-dark-blue">{{request.service}}</h3>
              <p class="text-bright-blue font-medium">{{request.artisan}}</p>
            </div>
            <span class="px-2 py-1 text-sm rounded-full"
                  [ngClass]="{'bg-yellow text-dark-blue': request.status === 'pending',
                             'bg-green-500 text-white': request.status === 'accepted',
                             'bg-red-500 text-white': request.status === 'declined'}">
              {{request.status | titlecase}}
            </span>
          </div>

          <div class="mt-4 space-y-2 text-sm text-gray-600">
            <p>📅 Requested for {{request.date}} at {{request.time}}</p>
            <p>📍 {{request.location}}</p>
            <p class="text-gray-700">{{request.description}}</p>
          </div>

          <div class="flex justify-end gap-2 mt-4">
            <button 
              *ngIf="request.status === 'pending'"
              class="btn bg-red-500 text-white hover:bg-red-600">
              Cancel Request
            </button>
            <button 
              class="btn bg-bright-blue text-white hover:bg-light-blue">
              Message Artisan
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class RequestsComponent {
  serviceRequests = [
    {
      service: 'Custom Metal Gate',
      artisan: 'James Thompson',
      status: 'pending',
      date: '2024-03-20',
      time: '10:00 AM',
      location: 'Chicago, IL',
      description: 'Decorative metal gate for garden entrance.'
    },
    {
      service: 'Pottery Workshop',
      artisan: 'Maria Rodriguez',
      status: 'accepted',
      date: '2024-03-25',
      time: '2:00 PM',
      location: 'Los Angeles, CA',
      description: 'Private pottery workshop for two people.'
    },
    {
      service: 'Custom Bookshelf',
      artisan: 'David Miller',
      status: 'declined',
      date: '2024-03-18',
      time: '11:00 AM',
      location: 'Brooklyn, NY',
      description: 'Built-in bookshelf for home office.'
    }
  ];
}