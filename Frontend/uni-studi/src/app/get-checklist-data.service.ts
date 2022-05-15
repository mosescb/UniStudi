import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetChecklistDataService {

  url = "http://10.53.101.241:5000/";
  constructor(private http: HttpClient) { }

  public getCheckListData(uname): Observable<any> {
    let queryParams = {'uname':uname}
    const resp = this.http.post(this.url + 'checklist',queryParams);
    return resp;
  }

  public saveCheckListData(uname,cid): Observable<any> {
    let queryParams = {'uname':uname,'cid':cid}
    console.log(queryParams)
    const options = {
      responseType: 'text' as const,
    };
    const resp = this.http.post(this.url + 'saveChecklist',queryParams,options);
    return resp;
  }

  public getFGDetails(uname):Observable<any> {
    let queryParams = {'uname':uname}
    const resp = this.http.post(this.url + 'fglist',queryParams);
    return resp;
  }

  public getFGNewsDetails(fgid):Observable<any> {
    let queryParams = {'fgid':fgid}
    const resp = this.http.post(this.url + 'fgnewslist',queryParams);
    return resp;
  }
}
