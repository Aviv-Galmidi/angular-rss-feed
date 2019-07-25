import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveURLService {
  private activeURL = '';
  private activeURL$ = new BehaviorSubject(this.activeURL);
  private feed$ = new BehaviorSubject({});

  constructor(public httpClient: HttpClient) {
    this.activeURL$.subscribe((activeURL) => {
      if (activeURL) {
        this.httpClient.get(`https://rss2json.com/api.json?rss_url=${activeURL}`).subscribe((data) => {
          this.feed$.next(data);
        });
      } else {
        this.feed$.next({});
      }
    });
  }

  setActiveURL(newActiveUrl: string) {
    this.activeURL = newActiveUrl;
    this.activeURL$.next(this.activeURL);
  }

  getFeed(): Observable<any> {
    return this.feed$;
  }
}
