import { Component } from '@angular/core';
import { Hero } from './models/hero.interface';
import { HEROES } from './models/mock-heroes';
import { HeroService } from './services/hero.service';
import { MessageService } from '../messages/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  constructor(private heroService: HeroService, private messageService: MessageService) {}
  ngOnInit(): void {
    this.getHeroes();
  }

  public heroes: Hero[] = [];
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
