import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService } from "../../../../components/services/auth.service";
import { DecodedToken } from "../../../../components/models/auth.models";
import { ArtisanService } from "../../../../components/services/auth.artisanService";
@Component({
  selector: "app-dashboard-header",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./dashboard-header.component.html",
})
export class DashboardHeaderComponent implements OnInit {
  currentUser: DecodedToken | null = null;
  profileImageUrl: string = "/default-profile.jpg";
  defaultProfileImage: string = "/default-profile.jpg";

  constructor(
    private authService: AuthService,
    private artisanService: ArtisanService
  ) {}

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
    if (this.currentUser?.id) {
      this.loadProfilePicture(this.currentUser.id);
    }
  }

  loadProfilePicture(id: number) {
    this.artisanService.getProfilePicture(id).subscribe({
      next: (result) => {
        if (result instanceof Blob) {
          this.profileImageUrl = URL.createObjectURL(result);
        } else {
          // If it's a string (default image path)
          this.profileImageUrl = result;
        }
      },
      error: () => {
        this.profileImageUrl = this.defaultProfileImage;
      },
    });
  }

  onImageError() {
    this.profileImageUrl = this.defaultProfileImage;
  }

  // Clean up object URLs when component is destroyed
  ngOnDestroy() {
    if (this.profileImageUrl.startsWith("blob:")) {
      URL.revokeObjectURL(this.profileImageUrl);
    }
  }
}
