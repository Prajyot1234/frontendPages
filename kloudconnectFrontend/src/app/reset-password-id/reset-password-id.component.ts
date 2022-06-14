import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ResetDialogComponent } from '../dialog/reset-dialog/reset-dialog.component';
import { ResetPasswordResponse } from '../models/ResetPasswordResponse';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-reset-password-id',
  templateUrl: './reset-password-id.component.html',
  styleUrls: ['./reset-password-id.component.css']
})
export class ResetPasswordIdComponent implements OnInit {
  
  public userId: string | undefined;
  
  constructor(route: ActivatedRoute,private authenticationService:AuthenticationService,private dialogRef:MatDialog) {
    route.params.subscribe((params) => {
      this.userId = params["id"];
    });
  }

  resetForm:FormGroup = new FormGroup(
    {
      password: new FormControl("",[Validators.required]),
      confirm_password:new FormControl("",[Validators.required])
    }
  );

  message: string | null = null;

  ngOnInit(): void {
  }

  submit(){
    let registerDetails = {
      _id : this.userId, 
      password : this.resetForm.get('password')?.value,
      password_confirmation : this.resetForm.get('confirm_password')?.value,
    }
    this.authenticationService.resetPassword(registerDetails).subscribe( (res:ResetPasswordResponse) => {
      if(res.status=="success"){
        this.dialogRef.open(ResetDialogComponent, { disableClose: true });
      }else{
        this.message = res.message;
      }
    },(error)=>{
      this.message = error;
      console.log(error);
    })
  }

  get password(){
    return this.resetForm.get("password");
  }

  get confirm_password(){
    return this.resetForm.get("confirm_password");
  }

  removeMessage(){
    this.message = null;
  }

}
