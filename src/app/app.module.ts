import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TippingComponent } from './components/tipping/tipping.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TippingComponent,
    HomeComponent,
    NavComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
