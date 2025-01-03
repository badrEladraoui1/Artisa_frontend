import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-white p-6 rounded-xl shadow-md">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select [(ngModel)]="selectedCategory" 
                  (ngModelChange)="onFilterChange()"
                  class="w-full p-2 rounded-lg border-gray-300 border focus:border-bright-blue focus:ring-bright-blue">
            <option value="">All Categories</option>
            <option value="woodworking">🔨 Woodworking</option>
            <option value="pottery">🎨 Pottery</option>
            <option value="metalwork">⚒️ Metalwork</option>
            <option value="textiles">🧵 Textiles</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <select [(ngModel)]="selectedLocation"
                  (ngModelChange)="onFilterChange()"
                  class="w-full p-2 rounded-lg border-gray-300 border focus:border-bright-blue focus:ring-bright-blue">
            <option value="">All Locations</option>
            <option value="new-york">New York</option>
            <option value="los-angeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Rating</label>
          <select [(ngModel)]="selectedRating"
                  (ngModelChange)="onFilterChange()"
                  class="w-full p-2 rounded-lg border-gray-300 border focus:border-bright-blue focus:ring-bright-blue">
            <option value="">All Ratings</option>
            <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
            <option value="4">⭐⭐⭐⭐ 4+ Stars</option>
            <option value="3">⭐⭐⭐ 3+ Stars</option>
          </select>
        </div>

        <div class="flex items-end">
          <button (click)="onFilterChange()" 
                  class="w-full btn btn-primary">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  `
})
export class FilterSectionComponent {
  @Input() selectedCategory = '';
  @Input() selectedLocation = '';
  @Input() selectedRating = '';
  
  @Output() filterChange = new EventEmitter<{
    category: string;
    location: string;
    rating: string;
  }>();

  onFilterChange(): void {
    this.filterChange.emit({
      category: this.selectedCategory,
      location: this.selectedLocation,
      rating: this.selectedRating
    });
  }
}