import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterResponse } from '../models/RegisterInfo';
import { AuthenticationService } from '../service/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialogComponent } from '../dialog/register-dialog/register-dialog.component';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    username:new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required]),
    confirmPassword: new FormControl("",[Validators.required])
  });

  message: string | null = null;

  constructor(private router:Router,private authenticationService:AuthenticationService,private dialogRef:MatDialog) { }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.message=null;
  }

  submit(){
    let registerDetails = {
      name:this.registerForm.get('username')?.value,
      email:this.registerForm.get('email')?.value,
      password:this.registerForm.get('password')?.value,
      password_confirmation:this.registerForm.get('confirmPassword')?.value
    }
    
    this.authenticationService.register(registerDetails).subscribe( (res:RegisterResponse) => {
      console.log(res);
      if(res.status=="success"){
        this.dialogRef.open(RegisterDialogComponent, { disableClose: true });
      }else{
        this.message = res.message;
      }
    },(error)=>{
      this.message = error;
      console.log(error);
    })
  }

  get username(){
    return this.registerForm.get('username');
  }

  get password(){
    return this.registerForm.get("password");
  }

  get email(){
    return this.registerForm.get("email");
  }

  get confirmPassword(){
    return this.registerForm.get("confirmPassword");
  }

  removeMessage(){
    this.message = null;
  }

}
