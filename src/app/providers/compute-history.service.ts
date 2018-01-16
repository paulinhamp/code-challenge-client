import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Request, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ComputeHistoryService {

  constructor(private http: HttpClient) { }

  getComputeHistories(page) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Authorization', 'Bearer ed62fc4bc51f2ab94b59c15f6c9f63896dce60dc');

    return this.http.get('https://protected-lowlands-51884.herokuapp.com/api/v1/compute_histories?page=' + page, { headers: headers});
  }
}
