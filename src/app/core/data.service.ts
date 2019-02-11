import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IResult, IContent } from '../shared/interfaces';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class DataService {
  private userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'https://randomuser.me/';
  }

  getUsers(): Observable<IResult[]> {
    return this.http.get<IResult[]>(`${this.userUrl}api/?results=30`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Node.js server error');
  }

}