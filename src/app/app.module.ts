import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { RecentComponent } from './recent/recent.component';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SongListComponent } from './song-list/song-list.component';
import { YourPlaylistComponent } from './your-playlist/your-playlist.component';
import { LoginComponent } from './login/login.component';
//import { AuthbtComponent } from './authbt/authbt.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    SearchComponent,
    RecentComponent,
    CategoriesComponent,
    FavoritesComponent,
    YourPlaylistComponent,
    SongListComponent,
    LoginComponent  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
