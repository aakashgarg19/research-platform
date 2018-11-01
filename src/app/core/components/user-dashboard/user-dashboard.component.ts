import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  public data = [];
  constructor() { }

  ngOnInit() {
    this.initializeData();
  }

  public initializeData() {
    this.data = [
      {
        itemName: 'Article.pdf',
        title: 'Published Articles',
        count: 5,
        dataArray: [
          'Article 1',
          'Article 2',
          'Article 3'
        ],
        viewRoute: 'view/articles'
      },
      {
        itemName: 'White_Paper',
        title: 'Published White Papers',
        count: 2,
        dataArray: [
          'WhitePaper 1',
            'WhitePaper 2'
        ],
        viewRoute: 'view/whitePapers'
      },
      {
          itemName: 'Resume',
          title: 'Uploaded Resumes',
          count: 0,
          dataArray: [ ],
          viewRoute: 'view/resumes'
       },
       {
         itemName: '',
        title: 'Upcoming Events',
        count: 5,
        dataArray: [
          'Event 1',
          'Event 2',
          'Event 3'
        ],
        viewRoute: 'view/events'
      }
    ];
  }

  public openItem(itemName: string) {
    if (itemName.length === 0) {
      alert('Not Found');
      return;
    }
    window.open( `/assets/articles/${itemName}`, 'blank');
  }

}
