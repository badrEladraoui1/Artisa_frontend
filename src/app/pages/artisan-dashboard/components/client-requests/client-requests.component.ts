import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RequestCardComponent } from "./request-card.component";
import { RouterModule } from "@angular/router";
import { CLientRequest } from "../../../../components/models/auth.models";

@Component({
  selector: "app-client-requests",
  standalone: true,
  imports: [CommonModule, RequestCardComponent, RouterModule],
  templateUrl: "./client-requests.component.html", // Path to the HTML file
})
export class ClientRequestsComponent {
  requests: CLientRequest[] = [
    {
      id: "1",
      clientName: "John Smith",
      service: "Custom Dining Table",
      date: "2024-03-15",
      time: "14:00",
      location: "Brooklyn, NY",
      status: "pending",
      description:
        "Looking for a farmhouse-style dining table that seats 8 people.",
    },
    {
      id: "2",
      clientName: "Sarah Johnson",
      service: "Antique Chair Restoration",
      date: "2024-03-16",
      time: "10:00",
      location: "Manhattan, NY",
      status: "pending",
      description: "Need restoration work on a Victorian-era dining chair.",
    },
  ];

  ngOnInit() {
    console.log(this.requests); // Check if the requests are properly initialized
  }

  onAcceptRequest(requestId: string) {
    console.log("Accept request:", requestId);
  }

  onDeclineRequest(requestId: string) {
    console.log("Decline request:", requestId);
  }

  onRequestMoreInfo(requestId: string) {
    console.log("Request more info:", requestId);
  }
}
