import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ApiserviceService } from './shared/apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),ApiserviceService,importProvidersFrom(HttpClientModule),AuthService,Ng2SearchPipeModule]
};
