import { Injectable } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Injectable({
  providedIn: 'root'
})
export class UtilManagerService {

  constructor(private ngxXml2jsonService: NgxXml2jsonService) { }

  convertXmlToJson (xml: string) {
    const parser = new DOMParser();
    
    if(xml !== "") {
      const xmlString = parser.parseFromString(xml, 'text/xml');
      return this.ngxXml2jsonService.xmlToJson(xmlString);
    }
    return null;
    
  }
}
