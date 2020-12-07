import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Store } from './store'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}
