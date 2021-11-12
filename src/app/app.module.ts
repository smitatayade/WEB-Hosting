import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { LoginComponent } from './Component/login/login.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { PasswordComponent } from './Component/password/password.component';
import { IndexComponent } from './Component/index/index.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewComponent } from './Component/review/review.component';
import { StepsComponent } from './Component/steps/steps.component';
import { CarouselComponent } from './Component/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { LanguageComponent } from './Component/language/language.component';
import { PackagesComponent } from './Component/packages/packages.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    PasswordComponent,
    IndexComponent,
    ReviewComponent,
    StepsComponent,
    CarouselComponent,
    LanguageComponent,
    PackagesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
