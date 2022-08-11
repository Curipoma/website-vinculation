import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpInterceptorProviders } from './interceptors';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import {
  FooterComponent,
  TopbarComponent,
  BlankComponent,
  MainComponent,
  BreadcrumbComponent,
} from '@layout';
import { AccordionModule } from 'primeng/accordion';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '@shared/shared.module';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    BreadcrumbComponent,
    FooterComponent,
    MainComponent,
    TopbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BreadcrumbModule,
    AccordionModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    CardModule,
    DropdownModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    HttpInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
