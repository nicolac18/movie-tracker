import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Filter } from './filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filter: Filter;
  sorting: { label: string; value: string; }[];
  watched: { label: string; value: boolean; }[];
  years: number[];

  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.filter = new Filter();
    this.years = [];

    this._generateSorting();
    this._generateWatched();
    this._generateYears();
  }

  filterChanged(type: string, event: any): void {
    if (event.value) {
      this.filter[type] = event.value;
    } else {
      delete this.filter[type];
    }

    this.change.emit(this.filter);
  }

  _generateSorting(): void {
    this.sorting = [{
      label: 'Release Date - Ascending',
      value: 'release_date.asc'
    },
    {
      label: 'Release Date - Descending',
      value: 'release_date.desc'
    },
    {
      label: 'Title - Ascending',
      value: 'original_title.asc'
    },
    {
      label: 'Title - Descending',
      value: 'original_title.desc'
    },
    {
      label: 'Rating - Ascending',
      value: 'vote_average.asc'
    },
    {
      label: 'Rating - Descending',
      value: 'vote_average.desc'
    },
    {
      label: 'Popularity - Ascending',
      value: 'popularity.asc'
    },
    {
      label: 'Popularity - Descending',
      value: 'popularity.desc'
    }];
  }

  _generateWatched(): void {
    this.watched = [{
      label: 'Yes',
      value: true
    },
    {
      label: 'No',
      value: false
    }];
  }

  _generateYears(): void {
    const end = 1900;
    const start = (new Date()).getFullYear();

    for (let index = start; index >= end; index--) {
      this.years.push(index);
    }
  }

}
