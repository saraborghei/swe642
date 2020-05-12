import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { SubmitSuccessComponent } from './submit-success/submit-success.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitSuccessComponent,
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
