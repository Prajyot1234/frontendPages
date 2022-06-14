import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  GotoLogin(){
    this.router.navigateByUrl('');
  }
}
