import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileSettingsComponent } from "../../components/profile-settings/profile-settings.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [CommonModule, ProfileSettingsComponent, RouterModule],
  template: ` <app-profile-settings></app-profile-settings> `,
})
export class ProfileComponent {}
