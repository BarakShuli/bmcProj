import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/index/main/main.component';
import { GetCurrencyXmlListResolver } from './core/resolver/get-currency-xml-list.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: { currencyList: GetCurrencyXmlListResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
