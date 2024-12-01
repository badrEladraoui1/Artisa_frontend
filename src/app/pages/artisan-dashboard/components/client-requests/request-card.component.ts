import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CLientRequest } from "../../../../components/models/auth.models";

@Component({
  selector: "app-request-card",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./request-card.component.html", // Path to the HTML file
})
export class RequestCardComponent {
  // Use the Request type for the input property
  @Input() request: CLientRequest | null = null; // Use Request type

  // Emit events for accept, decline, and more info with the request's ID
  @Output() accept = new EventEmitter<string>();
  @Output() decline = new EventEmitter<string>();
  @Output() moreInfo = new EventEmitter<string>();
}
