// review-dialog.component.ts
import { Component, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from "@angular/material/dialog";

@Component({
  selector: "app-review-dialog",
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule],
  templateUrl: "./review-dialog.component.html",
})
export class ReviewDialogComponent {
  rating: number = 0;
  comment: string = "";

  constructor(
    public dialogRef: MatDialogRef<ReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { artisanName: string }
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close({
      rating: this.rating,
      comment: this.comment,
    });
  }
}
