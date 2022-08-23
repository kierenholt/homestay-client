import { Component, OnInit, ViewChild } from '@angular/core';
import { HomesService } from '../../homes.service';
import { Home } from '../../home.model';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-home-search-page',
  templateUrl: './home-search-page.component.html',
  styleUrls: ['./home-search-page.component.css']
})

export class HomeSearchComponent implements OnInit {
  homes: Home[] = [];
  oneBed: boolean = true;
  twoBeds: boolean = true;
  threeBeds: boolean = true;
  musicianOnly: boolean = false;
  page: number = 0;

  constructor(private homesService:HomesService) {}

  ngOnInit(): void {
    let queryObj = {
      oneBed: true, twoBeds: true, threeBeds: true, musicianOnly: false 
    };
    this.homesService.getHomesObservable(queryObj).subscribe(
      value => this.homes = value
      )
  }

  //gets list of homes
  doSearch() {
    let queryObj = {
      oneBed: this.oneBed, twoBeds: this.twoBeds, threeBeds: this.threeBeds, musicianOnly: this.musicianOnly 
    };
    this.homesService.getHomesObservable(queryObj).subscribe(
      value => this.homes = value
      )
  }

  nextPage() {
    let queryObj = {
      oneBed: this.oneBed, twoBeds: this.twoBeds, threeBeds: this.threeBeds, musicianOnly: this.musicianOnly,
      page: this.page
    };
    this.homesService.getHomesObservable(queryObj).subscribe(
      value => { 
        this.homes.push(...value);
        this.page++; 
    })
  }

  clear() {

  }
}
