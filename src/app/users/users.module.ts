import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    UsersListComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class UsersModule { }
