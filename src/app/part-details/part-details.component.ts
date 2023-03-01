import { Component, OnInit } from '@angular/core';
import { PartDetailsService } from '../part-details.service';
import { PartDetails } from 'src/app/common/PartDetails';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-part-details',
  templateUrl: './part-details.component.html',
  styleUrls: ['./part-details.component.css']
})
export class PartDetailsComponent implements OnInit {
  showResults = false;
  display = false;
  carModelId: string = '';
  partDetails: PartDetails[] = [];

  constructor(private partDetailsService: PartDetailsService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.partDetailsService.getStockByCarModelId(this.carModelId)
      .subscribe((partDetails: PartDetails[]) => this.partDetails = partDetails);
      this.showResults = true;
  }

  placeOrder() {
    this.display = !this.display;
  }


  


}
