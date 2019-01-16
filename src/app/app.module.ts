import { HttpClientModule } from '@angular/common/http';

import { AskDictionaryService } from './service/ask-dictionary.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [AskDictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
