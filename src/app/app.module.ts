import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AskDictionaryService } from './service/ask-dictionary.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WordLookupComponent } from './word-lookup/word-lookup.component';
import { AttributionComponent } from './attribution/attribution.component';

@NgModule({
  declarations: [AppComponent, WordLookupComponent, AttributionComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AskDictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
