import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Config } from '../configuration/config';

// Interfaces for the API response structure
export interface Restaurant {
  _id: string;
  userId: string;
  name: string;
  username: string;
  description: string;
  address: string;
  phone: string;
  coverImage: string;
  type: string[];
  rating: number;
  completedOrders: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface RestaurantsResponse {
  success: boolean;
  message: string;
  result: number;
  meta: {
    page: number;
    limit: number;
    totalPages: number;
    count: number;
  };
  data: Restaurant[];
}

@Injectable({
  providedIn: 'root',
})
export class AdminRestaurantService {
  private apiUrl = `${Config.BaseUrl}/api/restaurants`;

  constructor(private http: HttpClient) {}

  getRestaurants(page: number = 1, limit: number = 10): Observable<RestaurantsResponse> {
    return this.http.get<RestaurantsResponse>(`${this.apiUrl}?page=${page}&limit=${limit}`, { withCredentials: true }).pipe(
      catchError((err) => {
        console.warn('Backend failed, returning empty response', err);
        return of({
          success: false,
          message: 'Failed to retrieve restaurants',
          result: 0,
          meta: {
            page: 1,
            limit: 10,
            totalPages: 1,
            count: 0,
          },
          data: [],
        });
      })
    );
  }

  getRestaurantById(restaurantId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${restaurantId}`, { withCredentials: true }).pipe(
      catchError((err) => {
        console.warn('Failed to retrieve restaurant by ID', err);
        return of(null);
      })
    );
  }

  updateRestaurantStatus(restaurantId: string, status: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${restaurantId}/status`, { status }, { withCredentials: true }).pipe(
      catchError((err) => {
        console.error('Error updating restaurant status:', err);
        return of({ success: false, message: 'Failed to update restaurant status' });
      })
    );
  }
}