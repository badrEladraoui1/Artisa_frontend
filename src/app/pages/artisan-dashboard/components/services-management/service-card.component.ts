import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-50 rounded-lg p-4">
      <img [src]="service.image" [alt]="service.name" class="w-full h-48 object-cover rounded-lg mb-4">
      
      <h3 class="text-lg font-semibold text-dark-blue">{{service.name}}</h3>
      <p class="text-gray-600 text-sm mt-2">{{service.description}}</p>
      <div class="text-bright-blue font-semibold mt-2">{{service.price}}</div>
      
      <div class="flex justify-end gap-2 mt-4">
        <button 
          (click)="edit.emit(service)"
          class="btn bg-bright-blue text-white hover:bg-light-blue">
          Edit
        </button>
        <button 
          (click)="delete.emit(service.id)"
          class="btn bg-red-500 text-white hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  `
})
export class ServiceCardComponent {
  @Input() service: any;
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<string>();
}