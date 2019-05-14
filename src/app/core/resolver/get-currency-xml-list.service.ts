import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable} from 'rxjs';
import { HttpManagerService } from '../api/http-manager.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetCurrencyXmlListResolver implements Resolve<Observable<object>> {

  constructor(private httpApiService: HttpManagerService) {}

  resolve() {
    return null;//this.httpApiService.get(environment.CurrencyXMLUrl);
  }
}
