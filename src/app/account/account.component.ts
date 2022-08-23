import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  changePasswordForm: FormGroup = new FormGroup({
    oldPassword: new FormControl(null, [Validators.required]),
    newPassword1: new FormControl(null, [Validators.required]),
    newPassword2: new FormControl(null, [Validators.required]),
  });

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  changePassword() {
    if (this.changePasswordForm.value.newPassword1 == this.changePasswordForm.value.newPassword2) {
      if (this.changePasswordForm.value.oldPassword == this.userService.authenticatedUser?.password) {
        this.userService.changePassword(this.changePasswordForm.value.newPassword1).subscribe(
          (user: User) => {
            this.userService.authenticatedUser = user;
            alert("password changed successfully");
          }
        )
      }
      else {
        alert("old password is incorrect");
      }
    }
    else {
      alert("new passwords do not match");
    }
  }

  deleteAccount() {
    if (confirm("are you sure you want to delete your account?")) {
      this.userService.delete();
    }
  }
}
