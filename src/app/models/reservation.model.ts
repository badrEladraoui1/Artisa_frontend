// // Request DTO for creating a reservation
// export interface CreateReservationDto {
//   clientId: number;
//   artisanId: number;
//   serviceId: number;
//   notes?: string;
//   montant: number; // Add this since your backend requires it
//   proposedCompletionDate: Date;
// }

// export interface ReservationResponseDto {
//   id: number;
//   clientName: string;
//   artisanName: string;
//   serviceName: string;
//   servicePrice: number;
//   status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELED";
//   dateCreation: string;
//   dateModification: string;
//   notes?: string;
//   proposedCompletionDate: Date;
// }

// export interface UpdateReservationStatusDto {
//   status:
//     | "PENDING"
//     | "IN_PROGRESS"
//     | "COMPLETED"
//     | "CANCELED"
//     | "ACCEPTED"
//     | "DECLINED";
//   notes?: string;
//   proposedCompletionDate?: Date; // For when artisan counter-proposes a date
// }

// export interface UserInfo {
//   id: number;
//   nomComplet: string;
//   email: string;
//   phone: string;
//   adresse: string;
// }

// export interface ArtisanInfo extends UserInfo {
//   metier: string;
// }

// export interface ServiceInfo {
//   id: number;
//   titre: string;
//   description: string;
//   tarif: number;
//   categorie: string;
// }

// export interface ConfirmationDialogData {
//   proposedCompletionDate: Date | null;
//   notes: string;
//   minDate?: Date; // For date validation
// }

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
