import { Component, AfterViewInit, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contribute-page',
  templateUrl: './contribute-page.component.html',
  styleUrls: ['./contribute-page.component.css']
})
export class ContributePageComponent implements AfterViewInit, OnInit {
  isLoggedIn: boolean = false;
  constructor(private userService: UserService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.authenticatedUserObservable.subscribe(
      (user) => { 
        this.isLoggedIn = (user != null);
        if (this.isLoggedIn) this.dialog.closeAll();
      }
    )
    
    this.isLoggedIn = (this.userService.authenticatedUser != null) ;  
  }

  ngAfterViewInit(): void {
    if (!this.userService.authenticatedUser) {  
      this.dialog.open(LoginRegisterDialog, {
        width: '75%',
        data: {dialog: this.dialog}
      });
    }
    else {
    }
  }



  openDialog(): void {
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './dialog-animations-example-dialog.html',
})
export class LoginRegisterDialog {
  constructor(public dialogRef: MatDialogRef<LoginRegisterDialog>) { 
    dialogRef.disableClose = true;  }
}