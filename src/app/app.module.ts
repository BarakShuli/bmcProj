import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeRateComponent } from './components/index/exchange-rate/exchange-rate.component';
import { MainComponent } from './components/index/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { GetCurrencyXmlListResolver } from './core/resolver/get-currency-xml-list.service';
import { SortArrayByPropertyPipe } from './core/pipe/sort-array-by-property.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ExchangeRateComponent,
    SortArrayByPropertyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [NgxXml2jsonService, GetCurrencyXmlListResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
