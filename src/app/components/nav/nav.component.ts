import { Component, OnInit, OnDestroy } from "@angular/core";
import { RouterModule, Router, NavigationEnd } from "@angular/router";
import { CommonModule } from "@angular/common";
import { filter, Subscription } from "rxjs";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-nav",
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: "./nav.component.html",
})
export class NavComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  isLoggedIn = false;
  userRole: string = "";
  private routerSubscription: Subscription | undefined;
  private authSubscription: Subscription | undefined;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isMenuOpen = false;
      });

    this.authSubscription = this.authService.currentUser.subscribe((user) => {
      this.isLoggedIn = !!user;
      if (user?.roles) {
        if (user.roles.includes("ARTISAN")) {
          this.userRole = "ARTISAN";
        } else if (user.roles.includes("CLIENT")) {
          this.userRole = "CLIENT";
        }
      }
    });
  }

  getDashboardRoute(): string {
    if (this.userRole === "ARTISAN") {
      return "/artisan/dashboard/page";
    } else if (this.userRole === "CLIENT") {
      return "/client/dashboard/page";
    }
    return "/";
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}

// import { Component, OnInit, OnDestroy } from "@angular/core";
// import { RouterModule, Router, NavigationEnd } from "@angular/router";
// import { CommonModule } from "@angular/common";
// import { filter, Subscription } from "rxjs";
// import { AuthService } from "../services/auth.service"; // Import AuthService

// @Component({
//   selector: "app-nav",
//   standalone: true,
//   imports: [RouterModule, CommonModule],
//   templateUrl: "./nav.component.html",
// })
// export class NavComponent implements OnInit, OnDestroy {
//   isMenuOpen = false;
//   isLoggedIn = false;
//   private routerSubscription: Subscription | undefined;
//   private authSubscription: Subscription | undefined;

//   constructor(
//     private router: Router,
//     private authService: AuthService // Inject AuthService
//   ) {}

//   ngOnInit() {
//     // Subscribe to router events to close menu
//     this.routerSubscription = this.router.events
//       .pipe(filter((event) => event instanceof NavigationEnd))
//       .subscribe(() => {
//         this.isMenuOpen = false;
//       });

//     // Subscribe to authentication state
//     this.authSubscription = this.authService.currentUser.subscribe((user) => {
//       this.isLoggedIn = !!user;
//     });
//   }

//   ngOnDestroy() {
//     // Unsubscribe to prevent memory leaks
//     if (this.routerSubscription) {
//       this.routerSubscription.unsubscribe();
//     }
//     if (this.authSubscription) {
//       this.authSubscription.unsubscribe();
//     }
//   }

//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//   }

//   logout() {
//     this.authService.logout();
//     this.router.navigate(["/login"]);
//   }
// }
