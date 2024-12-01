import { provideRouter, withComponentInputBinding } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { BrowseArtisansComponent } from "./pages/browse-artisans/browse-artisans.component";
import { ArtisanDetailComponent } from "./pages/artisan-detail/artisan-detail.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { LoginComponent } from "./pages/auth/login/login.component";
import { ClientSignupComponent } from "./pages/auth/client-signup/client-signup.component";
import { ArtisanSignupComponent } from "./pages/auth/artisan-signup/artisan-signup.component";
import { ArtisanDashboardComponent } from "./pages/artisan-dashboard/artisan-dashboard.component";
import { ServicesComponent } from "./pages/artisan-dashboard/pages/services/services.component";
import { RequestCardComponent } from "./pages/artisan-dashboard/components/client-requests/request-card.component";
import { ProfileComponent as ArtisanProfileComponent } from "./pages/artisan-dashboard/pages/profile/profile.component";
import { ProfileComponent as ClientProfileComponent } from "./pages/client-dashboard/pages/profile/profile.component";
import { ClientDashboardComponent } from "./pages/client-dashboard/client-dashboard.component";
import { PurchasesComponent } from "./pages/client-dashboard/pages/purchases/purchases.component";
import { RequestsComponent } from "./pages/artisan-dashboard/pages/requests/requests.component";

export const routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "browse",
    component: BrowseArtisansComponent,
  },
  {
    path: "artisan/:id",
    component: ArtisanDetailComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "signup/client",
    component: ClientSignupComponent,
  },
  {
    path: "signup/artisan",
    component: ArtisanSignupComponent,
  },
  {
    path: "artisan/dashboard/page",
    component: ArtisanDashboardComponent,
    children: [
      {
        path: "services",
        component: ServicesComponent,
      },
      {
        path: "requests",
        component: RequestCardComponent,
      },
      {
        path: "profile",
        component: ArtisanProfileComponent,
      },
    ],
  },
  {
    path: "client/dashboard/page",
    component: ClientDashboardComponent,
    children: [
      {
        path: "purchases",
        component: PurchasesComponent,
      },
      {
        path: "requests",
        component: RequestsComponent,
      },
      {
        path: "profile",
        component: ClientProfileComponent,
      },
    ],
  },
  {
    path: "**",
    redirectTo: "",
  },
];

export const appRoutes = provideRouter(routes, withComponentInputBinding());
