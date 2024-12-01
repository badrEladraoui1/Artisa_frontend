import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from './service-card.component';
import { AddServiceModalComponent } from './add-service-modal.component';

@Component({
  selector: 'app-services-management',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent, AddServiceModalComponent],
  template: `
    <div class="bg-white rounded-lg shadow p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold text-dark-blue">Services Management</h2>
        <button 
          (click)="showAddServiceModal = true"
          class="btn btn-primary">
          Add New Service
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <app-service-card
          *ngFor="let service of services"
          [service]="service"
          (edit)="onEditService($event)"
          (delete)="onDeleteService($event)">
        </app-service-card>
      </div>

      <app-add-service-modal
        *ngIf="showAddServiceModal"
        (close)="showAddServiceModal = false"
        (save)="onSaveService($event)">
      </app-add-service-modal>
    </div>
  `
})
export class ServicesManagementComponent {
  showAddServiceModal = false;
  services = [
    {
      id: '1',
      name: 'Custom Furniture Design',
      description: 'Bespoke furniture pieces tailored to your needs',
      price: 'From $1,500',
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=500&q=80'
    },
    {
      id: '2',
      name: 'Furniture Restoration',
      description: 'Expert restoration of antique pieces',
      price: 'From $500',
      image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&q=80'
    }
  ];

  onEditService(service: any) {
    console.log('Edit service:', service);
  }

  onDeleteService(serviceId: string) {
    console.log('Delete service:', serviceId);
  }

  onSaveService(service: any) {
    console.log('Save service:', service);
    this.showAddServiceModal = false;
  }
}