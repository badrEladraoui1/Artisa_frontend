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