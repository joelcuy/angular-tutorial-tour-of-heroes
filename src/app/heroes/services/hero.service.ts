import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.interface';
import { HEROES } from '../models/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from '../../messages/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes')
    return heroes;
  }
}
