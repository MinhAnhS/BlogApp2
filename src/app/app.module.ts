import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlogDetailsComponent } from './blogs/blog-details/blog-details.component';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogDetailsComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
