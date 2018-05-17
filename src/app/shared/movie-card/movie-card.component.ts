import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Movie } from '@app/core/movie/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  baseImgUrl: string;

  @Input() movie: Movie;
  @Output() onAdd = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.baseImgUrl = 'https://image.tmdb.org/t/p/w500/';
  }

  add(type) {
    this.onAdd.emit({
      movie: this.movie,
      type
    });
  }
}
