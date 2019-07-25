import { TestBed, async } from '@angular/core/testing';
import { FeedComponent } from './feed.component';

describe('SidebarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FeedComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FeedComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'RSSFeed'`, () => {
    const fixture = TestBed.createComponent(FeedComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('RSSFeed');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(FeedComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to RSSFeed!');
  });
});
