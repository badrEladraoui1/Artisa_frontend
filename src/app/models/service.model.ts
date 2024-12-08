// models/service.model.ts
export interface ServiceResponseDTO {
  id?: number;
  categorie: string;
  dateCreation: Date;
  description: string;
  servicePictureFileName: string;
  tarif: number;
  titre: string;
  artisan: ArtisanDTO;
}

export interface ArtisanDTO {
  id: number;
  nomComplet: string;
  email: string;
  phone: string;
  adresse: string;
  roles: string[];
}

// This is used for sending data to the server
export interface ServiceDTO {
  titre: string;
  description: string;
  tarif: number;
  servicePicture?: File;
}
