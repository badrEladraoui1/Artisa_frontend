import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService } from "../../../../components/services/auth.service";
import { DecodedToken } from "../../../../components/models/auth.models";
import { ClientService } from "../../../../components/services/auth.clientService";
@Component({
  selector: "app-client-dashboard-header",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./client-dashboard-header.component.html",
})
export class ClientDashboardHeaderComponent implements OnInit {
  currentUser: DecodedToken | null = null;
  profileImageUrl: string = "/default-profile.jpg";
  defaultProfileImage: string = "/default-profile.jpg";

  constructor(
    private authService: AuthService,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
    if (this.currentUser?.id) {
      this.loadProfilePicture(this.currentUser.id);
    }
  }

  loadProfilePicture(id: number) {
    console.log("Loading profile picture for client ID:", id);
    this.clientService.getProfilePicture(id).subscribe({
      next: (result) => {
        console.log("Profile picture result:", result);
        if (result instanceof Blob) {
          this.profileImageUrl = URL.createObjectURL(result);
        } else {
          this.profileImageUrl = result;
        }
      },
      error: (error) => {
        console.error("Error loading profile picture:", error);
        this.profileImageUrl = this.defaultProfileImage;
      },
    });
  }

  // loadProfilePicture(id: number) {
  //   this.clientService.getProfilePicture(id).subscribe({
  //     next: (result) => {
  //       if (result instanceof Blob) {
  //         this.profileImageUrl = URL.createObjectURL(result);
  //       } else {
  //         // If it's a string (default image path)
  //         this.profileImageUrl = result;
  //       }
  //     },
  //     error: () => {
  //       this.profileImageUrl = this.defaultProfileImage;
  //     },
  //   });
  // }

  onImageError() {
    this.profileImageUrl = this.defaultProfileImage;
  }

  ngOnDestroy() {
    if (this.profileImageUrl.startsWith("blob:")) {
      URL.revokeObjectURL(this.profileImageUrl);
    }
  }
}
