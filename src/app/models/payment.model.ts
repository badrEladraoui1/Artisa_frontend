// models/payment.model.ts
export interface PaymentRequestDto {
  reservationId: number;
  paymentMethod: "CARD" | "PAYPAL";
  amount: number;
  paymentDetails: CardDetails | PaypalDetails;
}

interface CardDetails {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardLastFour: string;
}

interface PaypalDetails {
  paypalEmail: string;
}

export interface PaymentResponseDto {
  id: number;
  reservationId: number;
  amount: number;
  status: string;
  paymentMethod: string;
  date: string;
}
