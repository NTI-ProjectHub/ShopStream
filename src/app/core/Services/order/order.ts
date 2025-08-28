import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../configuration/config';

interface Customer {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Restaurant {
  _id: string;
  name: string;
  address: string;
  phone: string;
}

export interface Order {
  _id: string;
  customerId: Customer;
  restaurantId: Restaurant;
  adminId: string | null;
  deliveryFee: number;
  totalPrice: number;
  deliveryAddress: string;
  timeToDeliver: number;
  PaymentMethod: string;
  status: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface OrdersResponse {
  message: string;
  status: string;
  result: {
    total: number;
    page: number;
    limit: number;
  };
  meta: {
    totalOrders: number;
    currentPage: number;
    itemsPerPage: number;
    role: string;
  };
  data: Order[];
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = `${Config.BaseUrl}/api/orders`;

  constructor(private http: HttpClient) {}

  getOrders(page: number = 1, limit: number = 10): Observable<OrdersResponse> {
    return this.http.get<OrdersResponse>(`${this.apiUrl}?page=${page}&limit=${limit}`, { withCredentials: true });
  }

  updateOrderStatus(orderId: string, status: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${orderId}/status`, { status }, { withCredentials: true });
  }
}