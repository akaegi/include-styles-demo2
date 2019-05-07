import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IncludeStylesModule } from '@codebakery/origami/styles';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './main/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IncludeStylesModule,
    AppRoutingModule  // should be last (order matters)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] /* otherwise Vaadin Components integration does not work */,
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PageNotFoundComponent]
})
export class AppModule { }
