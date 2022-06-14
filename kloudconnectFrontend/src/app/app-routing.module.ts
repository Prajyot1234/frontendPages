import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ResetPasswordIdComponent } from './reset-password-id/reset-password-id.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';

const routes: Routes = [
  {path: '', canActivate: [AuthGuard], component:HomePageComponent },
  {path: 'login', component :LoginPageComponent },
  {path: 'register', component :RegisterPageComponent },
  {path: 'reset-password',component :ResetPasswordPageComponent },
  {path: 'reset-password/:id',component: ResetPasswordIdComponent},
  {path:'**', redirectTo: 'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
