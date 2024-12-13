export interface Service {
  name: string;
  price: string;
  description: string;
}

export interface Artisan {
  id: string;
  name: string;
  image: string;
  rating: string;
  location: string;
  phone: string;
  description: string;
  services: Service[];
  tags: string[];
}

export interface ArtisanDisplay {
  id: number;
  nomComplet: string;
  profilePictureFileName: string | null;
  profilePictureUrl?: string;
  rating: string;
  adresse: string;
  phone: string;
  description: string;
  metier: string;
  recentServices: ServicePreview[];
}

export interface ServicePreview {
  titre: string;
  tarif: number;
}

export interface ArtisanDetail {
  id: number;
  nomComplet: string;
  profilePictureFileName: string;
  email: string;
  adresse: string;
  phone: string;
  description: string;
  metier: string;
  services: ServiceDetail[];
}

export interface ServiceDetail {
  id: number;
  titre: string;
  description: string;
  tarif: number;
  servicePictureFileName: string;
  dateCreation: string;
}
