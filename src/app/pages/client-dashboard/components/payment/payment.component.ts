// payment.component.ts
import { Component, Inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from "@angular/material/dialog";
import { ReservationResponseDto } from "../../../../models/reservation.model";
import { CardFormatPipe } from "../../../../utils/card-format.pipe";
import { PaymentService } from "../../../../components/services/payment.service";
import { PaymentRequestDto } from "../../../../models/payment.model";

@Component({
  selector: "app-payment",
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, CardFormatPipe],
  templateUrl: "./payment.component.html",
})
export class PaymentComponent implements OnInit {
  selectedPaymentMethod: "CARD" | "PAYPAL" = "CARD";
  cardNumber = "";
  expiryDate = "";
  cvv = "";
  paypalEmail = "";
  platformFee = 0;
  remainingAmount = 0;
  isProcessing = false;

  constructor(
    public dialogRef: MatDialogRef<PaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public reservation: ReservationResponseDto,
    private paymentService: PaymentService
  ) {}

  ngOnInit() {
    if (this.reservation?.servicePrice) {
      this.platformFee = this.reservation.servicePrice * 0.2;
      this.remainingAmount = this.reservation.servicePrice - this.platformFee;
    }
  }

  formatCardNumber(event: any) {
    let value = event.target.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (value.length > 16) value = value.substring(0, 16);
    this.cardNumber = value;
  }

  formatExpiryDate(event: any) {
    let value = event.target.value.replace(/\D/g, "");
    if (value.length > 4) value = value.substring(0, 4);
    if (value.length > 2) {
      value = value.substring(0, 2) + "/" + value.substring(2);
    }
    this.expiryDate = value;
  }

  isValidPayment(): boolean {
    if (this.selectedPaymentMethod === "PAYPAL") {
      return this.isValidEmail(this.paypalEmail);
    }
    return (
      this.cardNumber.length === 16 &&
      this.isValidExpiryDate(this.expiryDate) &&
      this.cvv.length === 3
    );
  }

  private isValidExpiryDate(expiry: string): boolean {
    if (!expiry) return false;
    const [month, year] = expiry.split("/");
    if (!month || !year) return false;

    const currentDate = new Date();
    const expiryDate = new Date(2000 + parseInt(year), parseInt(month) - 1);
    return expiryDate > currentDate;
  }

  private isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  onCancel() {
    this.dialogRef.close();
  }

  onProceed() {
    if (!this.isValidPayment()) return;

    this.isProcessing = true;

    const paymentData: PaymentRequestDto = {
      reservationId: this.reservation.id,
      paymentMethod: this.selectedPaymentMethod,
      amount: this.platformFee,
      paymentDetails:
        this.selectedPaymentMethod === "PAYPAL"
          ? {
              paypalEmail: this.paypalEmail,
            }
          : {
              cardNumber: this.cardNumber,
              expiryDate: this.expiryDate,
              cvv: this.cvv,
              cardLastFour: this.cardNumber.slice(-4),
            },
    };

    this.paymentService.processPayment(paymentData).subscribe({
      next: (response) => {
        this.isProcessing = false;
        this.dialogRef.close({ success: true, transaction: response });
      },
      error: (error) => {
        console.error("Payment failed:", error);
        this.isProcessing = false;
        alert("Payment failed. Please try again.");
      },
    });
  }
}

// onProceed() {
//   this.isProcessing = true;
//   // Simulate payment processing
//   setTimeout(() => {
//     this.dialogRef.close({
//       success: true,
//       paymentMethod: this.selectedPaymentMethod,
//       amount: this.platformFee,
//       paymentDetails:
//         this.selectedPaymentMethod === "paypal"
//           ? { email: this.paypalEmail }
//           : {
//               cardNumber: this.cardNumber,
//               expiryDate: this.expiryDate,
//               cvv: this.cvv,
//             },
//     });
//   }, 2000);
// }

// import { Component, Input, OnInit } from "@angular/core";
// import { CommonModule } from "@angular/common";
// import { FormsModule } from "@angular/forms";
// import { ReservationResponseDto } from "../../../../models/reservation.model";

// @Component({
//   selector: "app-payment",
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: "./payment.component.html",
// })
// export class PaymentComponent implements OnInit {
//   @Input() reservation!: ReservationResponseDto;

//   selectedPaymentMethod: "card" | "paypal" = "card";
//   cardNumber = "";
//   expiryDate = "";
//   cvv = "";

//   platformFee = 0;
//   remainingAmount = 0;

//   ngOnInit() {
//     // Calculate fees
//     this.platformFee = this.reservation.servicePrice * 0.2; // 20% platform fee
//     this.remainingAmount = this.reservation.servicePrice - this.platformFee;
//   }

//   isValidPayment(): boolean {
//     if (this.selectedPaymentMethod === "paypal") return true;
//     return (
//       this.cardNumber.length === 16 &&
//       this.expiryDate.length === 5 &&
//       this.cvv.length === 3
//     );
//   }

//   onCancel() {
//     // Handle cancel
//     console.log("Payment cancelled");
//   }

//   onProceed() {
//     if (this.selectedPaymentMethod === "paypal") {
//       // Handle PayPal redirect
//       console.log("Redirecting to PayPal...");
//       return;
//     }

//     // Handle card payment
//     console.log("Processing card payment...", {
//       amount: this.platformFee,
//       cardNumber: this.cardNumber,
//       expiryDate: this.expiryDate,
//       cvv: this.cvv,
//     });
//   }
// }
