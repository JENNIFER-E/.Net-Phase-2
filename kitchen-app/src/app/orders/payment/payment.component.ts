import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/model/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  products: Item[];
  total: number=0;
  constructor(private router:Router,private route:ActivatedRoute,private itemService:ItemService) { }

  ngOnInit(): void {
    this.products=this.itemService.products;
    this.total=this.itemService.total;
    
  }

}
