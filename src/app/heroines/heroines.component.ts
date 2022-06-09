// You always import the Component symbol from the Angular core library and annotate the component class with @Component.
import { Component, OnInit } from '@angular/core';

// @Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroines',
  templateUrl: './heroines.component.html',
  styleUrls: ['./heroines.component.css']
})
export class HeroinesComponent implements OnInit {

  heroine = 'Captain Marvel';

  constructor() { }

  // The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component. It's a good place to put initialization logic.
  ngOnInit(): void {
  }

}
