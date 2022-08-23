import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomesService } from '../homes.service';
import { User, userCredentials } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  register() {
    this.userService.register(this.registerForm.value); //subscribes within the userservice class
  }


}
