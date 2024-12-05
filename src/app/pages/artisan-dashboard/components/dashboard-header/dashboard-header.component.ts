import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService } from "../../../../components/services/auth.service";
import { DecodedToken } from "../../../../components/models/auth.models";
import { ArtisanService } from "../../../../components/services/auth.artisanService";
@Component({
  selector: "app-dashboard-header",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white shadow">
      <div class="container mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center gap-4">
            <!-- Profile Picture -->
            <div class="relative">
              <img
                [src]="profileImageUrl"
                (error)="onImageError()"
                class="w-16 h-16 rounded-full object-cover border-2 border-bright-blue"
                alt="Profile picture"
              />
            </div>
            <div>
              <h1 class="text-2xl font-bold text-dark-blue">
                Welcome back : {{ currentUser?.nomComplet }} !!!
              </h1>
              <p class="text-gray-600">
                {{ currentUser?.email }} | {{ currentUser?.phone }}
              </p>
              <p class="text-gray-600 text-sm">{{ currentUser?.adresse }}</p>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-6 mt-4 md:mt-0">
            <div class="text-center">
              <div class="text-2xl font-bold text-bright-blue">12</div>
              <div class="text-sm text-gray-600">Active Services</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-orange">8</div>
              <div class="text-sm text-gray-600">Pending Requests</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-yellow">4.9</div>
              <div class="text-sm text-gray-600">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class DashboardHeaderComponent implements OnInit {
  currentUser: DecodedToken | null = null;
  profileImageUrl: string = "";
  defaultProfileImage: string =
    "../../../../../assets/images/default_image.jpg";

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
      next: (blob) => {
        this.profileImageUrl = URL.createObjectURL(blob);
      },
      error: () => {
        this.profileImageUrl = this.defaultProfileImage;
      },
    });
  }

  onImageError() {
    this.profileImageUrl = this.defaultProfileImage;
  }
}
