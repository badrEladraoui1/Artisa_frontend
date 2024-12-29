// reservation.model.ts
export type ReservationStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELED"
  | "SUGGESTED_BY_ARTISAN" // New status
  | "ACCEPTED"
  | "DECLINED";

export interface CreateReservationDto {
  clientId: number;
  artisanId: number;
  serviceId: number;
  notes?: string;
  montant: number;
  proposedCompletionDate: Date;
}

export interface ReservationResponseDto {
  id: number;
  clientName: string;
  artisanName: string;
  serviceName: string;
  servicePrice: number;
  status: ReservationStatus;
  dateCreation: string;
  dateModification: string;
  notes?: string;
  proposedCompletionDate: Date;
  artisanConfirmed?: boolean;
  clientConfirmed?: boolean;
  reviewed: boolean;
}

export interface CompletionConfirmationResponse extends ReservationResponseDto {
  bothConfirmed: boolean;
}

export interface UpdateReservationStatusDto {
  status: ReservationStatus;
  notes?: string;
  proposedCompletionDate?: string; // ISO string format
}

export interface ConfirmationDialogData {
  proposedCompletionDate: Date | null;
  notes: string;
  minDate?: Date;
}

// payment.model.ts
export interface PaymentDetails {
  method: "card" | "paypal";
  amount: number;
  platformFee: number;
  remainingAmount: number;
  cardDetails?: {
    number: string;
    expiry: string;
    cvv: string;
  };
}

export interface ReviewDto {
  id?: number;
  reservationId: number;
  rating: number;
  comment?: string;
  reviewDate?: string;
  reviewerId?: number;
  reviewedArtisanId?: number;
  reviewerName?: string;
  artisanName?: string;
  serviceName?: string;
  servicePrice?: number;
}
