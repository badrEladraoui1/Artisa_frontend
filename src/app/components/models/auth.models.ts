export interface DecodedToken {
  id: number;
  email: string;
  nomComplet: string;
  adresse: string;
  phone: string;
  roles: string[];
  sub: string;
  iat: number;
  exp: number;
}

export interface CLientRequest {
  id: string;
  clientName: string;
  service: string;
  date: string;
  time: string;
  location: string;
  status: "pending" | "accepted" | "declined";
  description: string;
}

export interface SignUpDtoArtisan {
  nomComplet: string;
  email: string;
  address: string;
  phone: string;
  motDePasse: string;
  metier: string;
  description: string;
}

export interface SignUpDtoClient {
  nomComplet: string;
  email: string;
  address: string;
  phone: string;
  motDePasse: string;
}

export interface JwtAuthResponse {
  accessToken: string;
  tokenType: string;
}
