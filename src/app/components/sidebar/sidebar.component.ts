import {Component, OnInit} from '@angular/core';
import {ActiveURLService} from '../../services/active-url/active-url.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  feedURL = '';
  activeURL: string;
  selectedURLs: string[];

  constructor(public activeURLService: ActiveURLService) {
    const lastKnownActiveURL = localStorage.getItem('activeURL');
    this.setActiveURL(lastKnownActiveURL);
    const lastKnownSelectedURLs = JSON.parse(localStorage.getItem('selectedURLs'));
    this.selectedURLs = lastKnownSelectedURLs ? lastKnownSelectedURLs : [];
  }

  ngOnInit(): void {
  }

  setActiveURL(selectedURL) {
    localStorage.setItem('activeURL', selectedURL);
    this.activeURL = selectedURL;
    this.activeURLService.setActiveURL(selectedURL);
  }

  addCurrentURL() {
    if (this.feedURL.length > 0) {
      this.removeSelectedURL(this.feedURL);
      this.selectedURLs.unshift(this.feedURL);
      localStorage.setItem('selectedURLs', JSON.stringify(this.selectedURLs));
    }
    this.setActiveURL(this.feedURL);
  }

  removeSelectedURL(selectedURL) {
    if (this.selectedURLs.includes(selectedURL)) {
      const index = this.selectedURLs.indexOf(selectedURL);
      this.selectedURLs.splice(index, 1);
      localStorage.setItem('selectedURLs', JSON.stringify(this.selectedURLs));
    }
    if (selectedURL === this.activeURL) {
      this.setActiveURL('');
    }
  }
}
