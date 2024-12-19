// client-request.model.ts
export interface ClientRequest {
  id: number;
  clientName: string;
  serviceTitle: string;
  requestDate: string;
  location: string;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELED";
  description: string;
}
