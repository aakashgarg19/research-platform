import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
    public data = [];
    constructor() { }

    ngOnInit() {
      this.initializeData();
    }

    public initializeData() {
      this.data = [
        {
          itemName: 'Article.pdf',
          title: 'Pending Articles',
          count: 5,
          dataArray: [
            'Article 1',
            'Article 2',
            'Article 3'
          ],
          viewRoute: 'view/articles',
          approveReject: true
        },
        {
          itemName: 'White_Paper',
          title: 'Pending White Papers',
          count: 2,
          dataArray: [
            'WhitePaper 1',
            'WhitePaper 2'
          ],
          viewRoute: 'view/whitePapers',
          approveReject: true
        },
        {
            itemName: 'Resume',
            title: 'Uploaded Resumes',
            count: 0,
            dataArray: [ ],
            viewRoute: 'view/resumes',
            approveReject: false
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
          viewRoute: 'view/events',
          approveReject: false
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
