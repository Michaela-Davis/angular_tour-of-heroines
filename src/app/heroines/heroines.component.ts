// You always import the Component symbol from the Angular core library and annotate the component class with @Component.
import { Component, OnInit } from '@angular/core';
import { Heroine } from '../heroine';
import { HeroineService } from '../heroine.service';
import { MessageService } from '../message.service';


// @Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroines',
  templateUrl: './heroines.component.html',
  styleUrls: ['./heroines.component.css']
})
export class HeroinesComponent implements OnInit {
    // assigns the clicked hero from the template to the component's selectedHeroine
    selectedHeroine?: Heroine;

  heroines: Heroine[] =[];

  constructor(private heroineService: HeroineService, private messageService: MessageService) {}

  // The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component. It's a good place to put initialization logic.
  ngOnInit(): void {
    this.getHeroines();
  }

  onSelect(heroine: Heroine): void {
    this.selectedHeroine = heroine;
    this.messageService.add(`HeroinesComponent: Selected heroine id=${heroine.id}`);
  }

  // waits for the Observable to emit the array of heroes —which could happen now or several minutes from now. The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
  getHeroines(): void {
    this.heroineService.getHeroines()
      .subscribe(heroines => this.heroines =heroines);
  }

}
