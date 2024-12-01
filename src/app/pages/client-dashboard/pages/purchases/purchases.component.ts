import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchases',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-xl font-bold text-dark-blue mb-6">Purchased Services</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div *ngFor="let service of purchasedServices" class="bg-gray-50 rounded-lg p-4">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-lg font-semibold text-dark-blue">{{service.name}}</h3>
              <p class="text-bright-blue font-medium">{{service.artisan}}</p>
            </div>
            <span class="px-2 py-1 text-sm rounded-full"
                  [ngClass]="{'bg-green-500 text-white': service.status === 'completed',
                             'bg-yellow text-dark-blue': service.status === 'in progress',
                             'bg-orange text-white': service.status === 'pending'}">
              {{service.status | titlecase}}
            </span>
          </div>

          <div class="mt-4 space-y-2 text-sm text-gray-600">
            <p>📅 {{service.date}}</p>
            <p>💰 {{service.price}}</p>
            <p class="text-gray-700">{{service.description}}</p>
          </div>

          <div class="flex justify-end gap-2 mt-4">
            <button 
              *ngIf="service.status !== 'completed'"
              class="btn bg-bright-blue text-white hover:bg-light-blue">
              Track Progress
            </button>
            <button 
              *ngIf="service.status === 'completed'"
              class="btn bg-orange text-white hover:bg-yellow">
              Leave Review
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PurchasesComponent {
  purchasedServices = [
    {
      name: 'Custom Dining Table',
      artisan: 'David Miller',
      status: 'in progress',
      date: '2024-03-15',
      price: '$2,500',
      description: 'Farmhouse-style dining table that seats 8 people.'
    },
    {
      name: 'Antique Chair Restoration',
      artisan: 'David Miller',
      status: 'pending',
      date: '2024-03-16',
      price: '$800',
      description: 'Restoration work on a Victorian-era dining chair.'
    },
    {
      name: 'Custom Ceramic Set',
      artisan: 'Maria Rodriguez',
      status: 'completed',
      date: '2024-02-28',
      price: '$1,200',
      description: 'Complete set of handcrafted dinnerware for 6 people.'
    }
  ];
}