import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ContextService} from './context.service';

@Injectable({
  providedIn: 'root'
})
export class GetTsrDetailsService {

  constructor(
    private http: HttpClient
  ) { }

  gettsrdetails(){
      return this.http.get('https://acacdvordsap01.es.ad.adp.com:8443/ords/imm01d/imms/apidashboard/TSRDetails?header_id=1565357');
  }
}
