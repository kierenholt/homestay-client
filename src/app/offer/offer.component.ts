import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Home } from '../home.model';
import { HomesService } from '../homes.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  offerForm: FormGroup = new FormGroup({
    city: new FormControl(null, [Validators.required]),
    hasKids: new FormControl(null, [Validators.required]),
    isMusician: new FormControl(null, [Validators.required]),
    numBeds: new FormControl(null, [Validators.required])
  });
  constructor(private homesService: HomesService, 
    private userService: UserService) { }

  ngOnInit(): void {
  }

  offer() {  
    let valueCopy = {...this.offerForm.value};
    if (this.userService.authenticatedUser?.id) {
      valueCopy["userId"] = this.userService.authenticatedUser.id;
      this.homesService.getCreateHomeObservable(valueCopy).subscribe(
        message => { if (message) alert("home added successfully"); }
      );  
    }
  }

  
}
