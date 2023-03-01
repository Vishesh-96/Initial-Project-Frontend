import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PartDetails } from 'src/app/common/PartDetails';

@Injectable({
  providedIn: 'root'
})
export class PartDetailsService {
  private baseUrl = 'http://localhost:8090';

  private apiUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) { }

  getStockByCarModelId(carModelId: string): Observable<PartDetails[]> {
    const url = `${this.baseUrl}/shop/stock/model/${carModelId}`;
    return this.http.get<PartDetails[]>(url);
  }

  placeOrder(componentId: string, unitInStock: number) {
    const orderDetails = {
      [componentId]: unitInStock
    };
    return this.http.post(`${this.apiUrl}/shop/order`, orderDetails);
  }

  updateStock(componentId: string, unitInStock: number) {
    const orderDetails = {
      [componentId]: unitInStock
    };
    return this.http.post(`${this.apiUrl}/update`, orderDetails);
  }

}
