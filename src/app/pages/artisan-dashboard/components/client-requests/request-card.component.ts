import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReservationResponseDto } from "../../../../models/reservation.model";

@Component({
  selector: "app-request-card",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./request-card.component.html",
})
export class RequestCardComponent {
  @Input() request: ReservationResponseDto | null = null;
  @Input() isArtisan: boolean = false;
  @Output() accept = new EventEmitter<number>();
  @Output() decline = new EventEmitter<number>();
  @Output() moreInfo = new EventEmitter<number>();
  @Output() confirmCompletion = new EventEmitter<number>();
}
