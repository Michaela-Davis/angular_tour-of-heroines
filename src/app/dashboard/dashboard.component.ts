import { Component, OnInit } from '@angular/core';
import { Heroine } from '../heroine';
import { HeroineService } from '../heroine.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroines: Heroine[] = [];

  constructor(private heroineService: HeroineService) { }

  ngOnInit(): void {
    this.getHeroines();
  }

  getHeroines(): void {
    this.heroineService.getHeroines()
      .subscribe(heroines => this.heroines = heroines.slice(1, 5));
  }
}
