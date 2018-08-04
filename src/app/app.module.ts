import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importing the router module.
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogViewComponent,
    BlogEditComponent,
    BlogCreateComponent
  ],
  imports: [
    BrowserModule,
    // Router module forRoot method to declare the possible routes in application.
    RouterModule.forRoot([
      // path defines the url we see on address bar, component defines, the top imports.
      // For home component it goes to localhost:4200/home, for AboutComponent it goes to localhost:4200/about
      // For BlogViewComponent it goes to localhost:4200/blog/:blogId(it may change).
      
     {path:'home', component:HomeComponent},
     {path:'about', component:AboutComponent},
     {path:'blog/:blogId', component:BlogViewComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
