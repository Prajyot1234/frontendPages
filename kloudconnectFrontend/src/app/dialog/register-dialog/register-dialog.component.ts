import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  GotoLogin(){
    this.router.navigateByUrl('login');
  }
}
