import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
