import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FeedComponent} from './components/feed/feed.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {HttpClientModule} from '@angular/common/http';
import {ActiveURLService} from './services/active-url/active-url.service';

@NgModule({
  declarations: [
    FeedComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule
  ],
  providers: [ActiveURLService],
  bootstrap: [FeedComponent]
})
export class AppModule {
}
