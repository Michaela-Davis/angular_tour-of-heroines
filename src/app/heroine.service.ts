import { Injectable } from '@angular/core';
import { Heroine } from './heroine';
import { HEROINES } from './mock-heroines';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// You must make the HeroService available to the dependency injection system before Angular can inject it into the HeroesComponent by registering a provider. A provider is something that can create or deliver a service; in this case, it instantiates the HeroService class to provide the service.

// To make sure that the HeroService can provide this service, register it with the injector, which is the object that is responsible for choosing and injecting the provider where the application requires it.
@Injectable({
  providedIn: 'root'
})

export class HeroineService {

  // This is a typical "service-in-service" scenario: You inject the MessageService into the HeroService which is injected into the HeroesComponent.
  constructor(private messageService: MessageService) { }

  getHeroines(): Observable<Heroine[]> {
    const heroines = of(HEROINES);
    this.messageService.add('HeroineService: fetched heroines');
    return heroines;
  }

  getHeroine(id: number): Observable<Heroine> {
    const heroine = HEROINES.find(h => h.id === id)!;
    this.messageService.add(`HeroineService: fetched heroine id=${id}`);
    return of(heroine);
  }
}
