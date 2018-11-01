import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imageUrlArray = [];
  public height = '50vh';
  constructor() { }

  ngOnInit() {
    this.initializeImageUrlArray();
  }

  public initializeImageUrlArray() {
    this.imageUrlArray = [
       '../../../../assets/images/PublishArticle.jpg',
       '../../../../assets/images/Publish_Whitepaper.jpg',
       '../../../../assets/images/Upload_Resume.jpg'
    ];
  }

  public uploadFile(complete?: boolean) {
    const filePicker = document.getElementById('resumeUploadBox');
    if (!complete) {
      filePicker.click();
    } else {
      alert('Upload Complete');
    }
  }
}
