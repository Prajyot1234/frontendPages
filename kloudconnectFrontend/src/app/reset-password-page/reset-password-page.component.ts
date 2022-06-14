import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetResponse } from '../models/ResetResponse';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.css']
})
export class ResetPasswordPageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup(
    {
      username: new FormControl("",[Validators.required])
    }
  );

  message : string | null = null;

  constructor(private router:Router,private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

  submit(){
    let username = {
      email:this.loginForm.get('username')?.value
    }
    this.authenticationService.reset(username).subscribe( (res:ResetResponse) => {
      if(res.status=="success"){
        this.router.navigateByUrl(`reset-password/${res.id}`);
      }else{
        this.message = res.message;
        console.log(this.message);
      }
      console.log(res);
      
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

}
