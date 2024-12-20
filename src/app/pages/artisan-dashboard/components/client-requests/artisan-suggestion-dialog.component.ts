import { CommonModule } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { ConfirmationDialogData } from "../../../../models/reservation.model";

// artisan-suggestion-dialog.component.ts
@Component({
  selector: "app-artisan-suggestion-dialog",
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule],
  template: `
    <div class="bg-white rounded-lg w-full overflow-hidden">
      <div class="px-6 py-4 border-b">
        <h2 class="text-xl font-bold text-gray-800">
          Suggest Alternative Date
        </h2>
      </div>

      <div class="p-6">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Suggested Completion Date
          </label>
          <input
            type="date"
            [(ngModel)]="data.proposedCompletionDate"
            [min]="minDate.toISOString().split('T')[0]"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-blue"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Message to Client
          </label>
          <textarea
            [(ngModel)]="data.notes"
            rows="4"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-blue"
            placeholder="Explain why you're suggesting a different date..."
          ></textarea>
        </div>
      </div>

      <div class="px-6 py-4 bg-gray-50 flex justify-end gap-3">
        <button
          (click)="onCancel()"
          class="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
        <button
          (click)="onConfirm()"
          [disabled]="!isValidDate(data.proposedCompletionDate)"
          class="px-4 py-2 bg-bright-blue text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          Send Suggestion
        </button>
      </div>
    </div>
  `,
})
export class ArtisanSuggestionDialogComponent {
  minDate = new Date();

  constructor(
    public dialogRef: MatDialogRef<ArtisanSuggestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData
  ) {
    this.minDate.setDate(this.minDate.getDate() + 1);
  }

  isValidDate(date: Date | null): boolean {
    if (!date) return false;
    const selectedDate = new Date(date);
    return selectedDate >= this.minDate;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    if (this.isValidDate(this.data.proposedCompletionDate)) {
      const date = new Date(this.data.proposedCompletionDate as Date);
      this.dialogRef.close({
        proposedCompletionDate: date,
        notes: this.data.notes?.trim() || "",
      });
    }
  }
}
