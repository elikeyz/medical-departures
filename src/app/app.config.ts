import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideIcons } from '@ng-icons/core';
import { heroPencil, heroTrash, heroXMark } from '@ng-icons/heroicons/outline';
import { heroPlusSolid } from '@ng-icons/heroicons/solid';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideIcons({ heroPencil, heroTrash, heroPlusSolid, heroXMark })
  ]
};
