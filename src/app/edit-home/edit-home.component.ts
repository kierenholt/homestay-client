import { Component, OnInit } from '@angular/core';
import { Home } from '../home.model';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.css']
})
export class EditHomeComponent implements OnInit {
  public homes: Home[] = [];

  constructor(private userService: UserService) {
   }

  ngOnInit(): void {
    this.userService.getHomesOfUserObservable().subscribe(
      homes => this.homes = homes
    )
  }

    update(home: Home) {
      this.userService.updateHomeOfUserObservable(home).subscribe(
        (value: any) => {
          if (value) alert("home updated");
        }
      )
    }

    delete(home: Home) {
      if (confirm("are you sure you want to delete?")) {
        this.userService.deleteHomeOfUserObservable(home).subscribe(
          (value: any) => {
            if (value) {
              alert("home deleted");
              //refresh list
              this.userService.getHomesOfUserObservable().subscribe(
                homes => this.homes = homes
              )
            } 

          }
        )  
      }
    }

    changeKids(event: Event, home: Home) {
      home.hasKids = Number((event.target as HTMLSelectElement).value);
    }

    changeMusician(event: Event, home: Home) {
      home.isMusician = Number((event.target as HTMLSelectElement).value);
    }
}
