// confirmation-dialog.component.ts
import { Component, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from "@angular/material/dialog";
import { ConfirmationDialogData } from "../../models/reservation.model";

@Component({
  selector: "app-confirmation-dialog",
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule],
  template: `
    <div class="bg-white rounded-lg w-full overflow-hidden">
      <!-- Header -->
      <div class="px-6 py-4 border-b">
        <h2 class="text-xl font-bold text-gray-800">Confirm Service Request</h2>
      </div>

      <!-- Content -->
      <div class="p-6">
        <!-- Date Input -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Proposed Completion Date
          </label>
          <input
            type="date"
            [(ngModel)]="data.proposedCompletionDate"
            [min]="minDate.toISOString().split('T')[0]"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-blue"
          />
        </div>

        <!-- Notes Input -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Notes for the Artisan
          </label>
          <textarea
            [(ngModel)]="data.notes"
            rows="4"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-blue"
            placeholder="Add any specific requirements or notes..."
          ></textarea>
        </div>
      </div>

      <!-- Footer -->
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
          Confirm
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ConfirmationDialogComponent {
  minDate = new Date();

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData
  ) {
    this.minDate.setDate(this.minDate.getDate() + 1);

    // Set default date to tomorrow
    if (!this.data.proposedCompletionDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      this.data.proposedCompletionDate = tomorrow;
    }
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

// // confirmation-dialog.component.ts
// import { Component, Inject, OnInit } from "@angular/core";
// import { CommonModule } from "@angular/common";
// import { FormsModule } from "@angular/forms";
// import {
//   MAT_DIALOG_DATA,
//   MatDialogModule,
//   MatDialogRef,
// } from "@angular/material/dialog";
// import { ConfirmationDialogData } from "../../models/reservation.model";

// @Component({
//   selector: "app-confirmation-dialog",
//   standalone: true,
//   imports: [CommonModule, FormsModule, MatDialogModule],
//   // template: `
//   //   <div class="p-6">
//   //     <h2 class="text-xl font-bold mb-4">Confirm Service Request</h2>

//   //     <!-- Date Input -->
//   //     <div class="mb-4">
//   //       <label class="block text-sm font-medium text-gray-700 mb-1">
//   //         Proposed Completion Date
//   //       </label>
//   //       <input
//   //         type="date"
//   //         [(ngModel)]="data.proposedCompletionDate"
//   //         [min]="minDate.toISOString().split('T')[0]"
//   //         required
//   //         class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-blue"
//   //       />
//   //     </div>

//   //     <!-- Notes Input -->
//   //     <div class="mb-6">
//   //       <label class="block text-sm font-medium text-gray-700 mb-1">
//   //         Notes for the Artisan
//   //       </label>
//   //       <textarea
//   //         [(ngModel)]="data.notes"
//   //         rows="4"
//   //         class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-blue"
//   //         placeholder="Add any specific requirements or notes..."
//   //       ></textarea>
//   //     </div>

//   //     <!-- Action Buttons -->
//   //     <div class="flex justify-end gap-4">
//   //       <button
//   //         (click)="onCancel()"
//   //         class="px-4 py-2 text-gray-600 hover:text-gray-800"
//   //       >
//   //         Cancel
//   //       </button>
//   //       <button
//   //         (click)="onConfirm()"
//   //         [disabled]="!isValidDate(data.proposedCompletionDate)"
//   //         class="px-4 py-2 bg-bright-blue text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
//   //       >
//   //         Submit
//   //       </button>
//   //     </div>
//   //   </div>
//   // `,
//   template: `
//     <div class="dialog-content">
//       <h2 class="text-xl font-bold mb-4">Confirm Service Request</h2>

//       <div class="p-6">
//         <!-- Date Input -->
//         <div class="mb-4">
//           <label class="block text-sm font-medium text-gray-700 mb-1">
//             Proposed Completion Date
//           </label>
//           <input
//             type="date"
//             [(ngModel)]="data.proposedCompletionDate"
//             [min]="minDate.toISOString().split('T')[0]"
//             required
//             class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-blue"
//           />
//         </div>

//         <!-- Notes Input -->
//         <div class="mb-6">
//           <label class="block text-sm font-medium text-gray-700 mb-1">
//             Notes for the Artisan
//           </label>
//           <textarea
//             [(ngModel)]="data.notes"
//             rows="4"
//             class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-blue"
//             placeholder="Add any specific requirements or notes..."
//           ></textarea>
//         </div>
//       </div>

//       <div class="p-4 flex justify-end gap-4 border-t">
//         <button
//           (click)="onCancel()"
//           class="px-4 py-2 text-gray-600 hover:text-gray-800"
//         >
//           Cancel
//         </button>
//         <button
//           (click)="onConfirm()"
//           [disabled]="!isValidDate(data.proposedCompletionDate)"
//           class="px-4 py-2 bg-bright-blue text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   `,
//   styles: [
//     `
//       :host {
//         display: block;
//       }
//       .dialog-content {
//         background: white;
//         border-radius: 8px;
//         min-width: 400px;
//         max-width: 90vw;
//         max-height: 90vh;
//         overflow-y: auto;
//       }
//     `,
//   ],
// })
// export class ConfirmationDialogComponent implements OnInit {
//   minDate = new Date();

//   constructor(
//     public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData
//   ) {
//     this.minDate.setDate(this.minDate.getDate() + 1);
//   }

//   ngOnInit() {
//     // Initialize with tomorrow's date if no date is provided
//     if (!this.data.proposedCompletionDate) {
//       const tomorrow = new Date();
//       tomorrow.setDate(tomorrow.getDate() + 1);
//       this.data.proposedCompletionDate = tomorrow;
//     }
//   }

//   isValidDate(date: Date | null): boolean {
//     if (!date) return false;
//     const selectedDate = new Date(date);
//     return selectedDate >= this.minDate;
//   }

//   onCancel(): void {
//     this.dialogRef.close();
//   }

//   onConfirm(): void {
//     if (this.isValidDate(this.data.proposedCompletionDate)) {
//       // Ensure we're returning a proper Date object
//       const date = new Date(this.data.proposedCompletionDate as Date);
//       this.dialogRef.close({
//         proposedCompletionDate: date,
//         notes: this.data.notes?.trim() || "",
//       });
//     }
//   }
// }
