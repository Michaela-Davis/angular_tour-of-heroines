import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroineService } from '../heroine.service';
import { Heroine } from '../heroine';

@Component({
  selector: 'app-heroine-detail',
  templateUrl: './heroine-detail.component.html',
  styleUrls: ['./heroine-detail.component.css']
})
export class HeroineDetailComponent implements OnInit {
  // The hero property must be an Input property, annotated with the @Input() decorator, because the external HeroesComponent will bind to it like this.
  // <app-hero-detail [hero]="selectedHero"></app-hero-detail>
  @Input() heroine?: Heroine;

  constructor(
    // The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. This component is interested in the route's parameters extracted from the URL. The "id" parameter is the id of the hero to display.
    private route: ActivatedRoute,
    // The HeroService gets hero data from the remote server and this component will use it to get the hero-to-display.
    private heroineService: HeroineService,
    // The location is an Angular service for interacting with the browser. You'll use it later to navigate back to the view that navigated here.
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHeroine();
  }

  getHeroine(): void {
    // The route.snapshot is a static image of the route information shortly after the component was created.
    // The paramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch.
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroineService.getHeroine(id)
      .subscribe(heroine => this.heroine = heroine);
  }

  goBack(): void {
    this.location.back();
  }

}
