import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../configuration/config';
import { GlobalInfo } from '../global/global-info';
import {MOCK_RESTAURANTS} from './mock-restaurants'
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class restaurantservices{
  private apiUrl = `${Config.BaseUrl}/api/restaurants/`;

  constructor(private http: HttpClient, private globalInfo: GlobalInfo) {}

private getAuthHeaders(): HttpHeaders {
  const cookie = this.globalInfo.getUserInfo()?.token || '';
  return new HttpHeaders({
    'Cookie': cookie
  });
}


getAllRestaurants(): Observable<any> {
  return this.http.get<any>(this.apiUrl, { withCredentials: true }).pipe(
    catchError(err => {
      console.warn('Backend failed, using mock data', err);
      return of({
        success: true,
        message: "Restaurants retrieved from mock data",
        result: MOCK_RESTAURANTS.result,
        meta: { page: MOCK_RESTAURANTS.meta.page, limit: MOCK_RESTAURANTS.meta.limit, totalPages: MOCK_RESTAURANTS.meta.totalPages, count: MOCK_RESTAURANTS.meta.count },
        data: MOCK_RESTAURANTS.data
      });
    })
  );
}

  getRestaurantById(restaurantId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${restaurantId}`, { withCredentials:true});
  }
}


