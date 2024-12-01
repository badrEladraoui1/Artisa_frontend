import { bootstrapApplication } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { routes } from "./app/app.routes";
import { provideHttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./app/components/services/auth.interceptor";

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
}).catch((err) => console.error(err));
