import { Component } from '@angular/core';
import {ActiveURLService} from '../../services/active-url/active-url.service';

@Component({
  selector: 'app-root',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  title = 'RSSFeed';
  activeURL;
  feed;

  constructor(public activeURLService: ActiveURLService) {
    this.activeURLService.getFeed().subscribe(data => {
      this.activeURL = data && data.feed ? data.feed.url : '';
      this.feed = data;
    });
  }
}
