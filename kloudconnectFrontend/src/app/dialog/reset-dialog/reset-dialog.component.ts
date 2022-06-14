import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-dialog',
  templateUrl: './reset-dialog.component.html',
  styleUrls: ['./reset-dialog.component.css']
})
export class ResetDialogComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  GotoLogin(){
    this.router.navigateByUrl('login');
  }

}
