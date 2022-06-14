import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginDialogComponent } from '../dialog/login-dialog/login-dialog.component';
import { loginResponse } from '../models/LoginResponse';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup(
    {
      username: new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required])
    }
  );
  constructor(private router:Router,private authenticationService:AuthenticationService,private dialogRef:MatDialog) { }

  message: String | null = null;
  ngOnDestroy(): void {
    this.message=null;
  }

  ngOnInit(): void {
  }

  submit(){
    let loginDetails = {
      email:this.loginForm.get('username')?.value,
      password:this.loginForm.get('password')?.value
    }
    this.authenticationService.login(loginDetails).subscribe( (res:loginResponse) => {
      if(res.status=="success"){
        this.authenticationService.storeInLocalStorage(res);
        this.dialogRef.open(LoginDialogComponent, { disableClose: true });
      }else{
        this.message = res.message;  
      }
    },(error)=>{
      this.message = error;
      console.log(error);
    })
  }

  removeMessage(){
    this.message = null;
  }

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get("password");
  }

}
