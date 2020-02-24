import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './register/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ModalModule, ButtonsModule, TabsModule, BsDatepickerModule, BsDropdownModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertifyService } from './services/alertify.service';
import { AuthGuard } from './guards/auth.guard';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { HomeComponent } from './home/home.component';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { HomeScrollComponent } from './home-scroll/home-scroll.component';
import { LiveScrollingService } from './services/live-scrolling.service';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      RegisterComponent,
      HomeComponent,
      HomeScrollComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      TabsModule.forRoot(),
      ButtonsModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      ModalModule.forRoot(),
      JwtModule.forRoot({
         config: {
            tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      }),
      ScrollingModule
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      LiveScrollingService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
