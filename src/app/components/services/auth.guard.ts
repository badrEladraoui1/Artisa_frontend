import { Injectable } from "@angular/core";
import { Router, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    if (!this.authService.isLoggedIn()) {
      // Not logged in, redirect to login with return URL
      return this.router.createUrlTree(["/login"], {
        queryParams: {
          returnUrl: window.location.pathname + window.location.search,
        },
      });
    }

    // Check if user has CLIENT role
    const currentUser = this.authService.currentUserValue;
    if (currentUser?.roles.includes("CLIENT")) {
      return true;
    }

    // User is logged in but not a client, redirect to appropriate dashboard
    if (currentUser?.roles.includes("ARTISAN")) {
      return this.router.createUrlTree(["/artisan/dashboard/page"]);
    } else if (currentUser?.roles.includes("ADMIN")) {
      return this.router.createUrlTree(["/admin/dashboard/page"]);
    }

    // Fallback redirect
    return this.router.createUrlTree(["/"]);
  }
}
