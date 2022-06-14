import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordIdComponent } from './reset-password-id/reset-password-id.component';
import { RegisterDialogComponent } from './dialog/register-dialog/register-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ResetDialogComponent } from './dialog/reset-dialog/reset-dialog.component';
import { LoginDialogComponent } from './dialog/login-dialog/login-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    RegisterPageComponent,
    ResetPasswordPageComponent,
    ResetPasswordIdComponent,
    RegisterDialogComponent,
    ResetDialogComponent,
    LoginDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
