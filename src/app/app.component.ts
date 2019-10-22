import { Component } from '@angular/core';
import {HeroService} from './hero-service/hero.service';
import {MessageService} from './message-service/message.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService, MessageService, Router]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
