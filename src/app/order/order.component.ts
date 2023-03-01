import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PartDetails } from '../common/PartDetails';
import { PartDetailsService } from '../part-details.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  orderDetails: {[componentId: string]: number} = {};
  componentId: string = '';
  unitInStock: number = 0;
  partDetails: PartDetails[] = [];

  constructor(private http: HttpClient, private partDetailService: PartDetailsService) { }

  
  placeOrder() {
    this.partDetailService.placeOrder(this.componentId, this.unitInStock)
      .subscribe(response => {
        console.log(response);
        // handle success
      }, error => {
        console.error(error);
        // handle error
      });
      window.alert('Order placed successfully!');
  }
  

}
