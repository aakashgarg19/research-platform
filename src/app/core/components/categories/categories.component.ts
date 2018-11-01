import { Component, OnInit } from '@angular/core';

import { Categories } from '../../models/Categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public categories: Array<Categories>;
  constructor() { }

  ngOnInit() {
    this.initializeCategoriesArray();
  }

  public initializeCategoriesArray() {
    this.categories = [
      {
        name: 'Publish Article',
        description: 'Upload an article and publish it to the community.',
        route: 'article',
        bannerClass: 'far fa-newspaper'
      },
      {
        name: 'Publish White Paper',
        description: 'Upload white paper written by you and publish it to the community.',
        route: 'whitePaper',
        bannerClass: 'far fa-file'
      },
      {
        name: 'Upload CV/Resume',
        description: 'Upload your CV to get visibility to potential recruiters.',
        route: 'uploadResume',
        bannerClass: 'fas fa-upload'
      },
      {
        name: 'Upcoming Events',
        description: 'Find upcoming industry events to be part of an event as per your interest',
        route: 'upcomingEvents',
        bannerClass: 'fas fa-calendar-alt'
      }
    ];
  }
}
