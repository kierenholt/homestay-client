import { Component, OnInit } from '@angular/core';
import { HomesService } from '../homes.service';
import { Home } from '../home.model';

@Component({
  selector: 'app-home-search-page',
  templateUrl: './home-search-page.component.html',
  styleUrls: ['./home-search-page.component.css']
})
export class HomeSearchPageComponent implements OnInit {
  homes: Home[] = [];
  constructor(private homesService:HomesService) {}

  ngOnInit(): void {
    this.homesService.
  }

  //gets list of homes
  doSearch() {

  }
}
