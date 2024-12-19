// Request DTO for creating a reservation
export interface CreateReservationDto {
  clientId: number;
  artisanId: number;
  serviceId: number;
  notes?: string;
  montant: number; // Add this since your backend requires it
}

// Response DTO matching your backend response
// export interface ReservationResponseDto {
//   id: number;
//   client: {
//     id: number;
//     nomComplet: string;
//     email: string;
//     phone: string;
//     adresse: string;
//   };
//   artisan: {
//     id: number;
//     nomComplet: string;
//     email: string;
//     phone: string;
//     adresse: string;
//     metier: string;
//   };
//   service: {
//     id: number;
//     titre: string;
//     description: string;
//     tarif: number;
//     categorie: string;
//   };
//   status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELED";
//   montant: number;
//   dateCreation: string;
//   dateModification: string;
//   notes?: string;
// }

export interface ReservationResponseDto {
  id: number;
  clientName: string;
  artisanName: string;
  serviceName: string;
  servicePrice: number;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELED";
  dateCreation: string;
  dateModification: string;
  notes?: string;
}

export interface UserInfo {
  id: number;
  nomComplet: string;
  email: string;
  phone: string;
  adresse: string;
}

export interface ArtisanInfo extends UserInfo {
  metier: string;
}

export interface ServiceInfo {
  id: number;
  titre: string;
  description: string;
  tarif: number;
  categorie: string;
}

// export interface CreateReservationDto {
//   clientId: number;
//   artisanId: number;
//   serviceId: number;
//   notes?: string;
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
// }
