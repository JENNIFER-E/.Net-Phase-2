import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Router } from '@angular/router';
import { Item } from '../model/item.model';
import { Order } from '../model/order.model';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  items: Item[];
  searchBar:string;
  total:number=0;
  orders:Order[];
  added:boolean=false;

  item:Item=
  {
  id: 0,
  name: "",
  
  price:0

  };
 
  constructor(private itemService:ItemService,private router:Router) { }

  ngOnInit(): void {
    this.items = this.itemService.onGet();
    

 }
  onSearch(){
    if(this.searchBar==""){
      this.ngOnInit();
    }else{
      this.items=this.items.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.searchBar.toLocaleLowerCase());
      })
    }
  }
 
  addItem(item:Item){
    this.itemService.onOrder(item);
    this.added=true;

  }
  customTrackBy(index:number,obj:any):any{
    return index;
  }
  onDisplay(){
    let oproducts=this.itemService.products;
    for(let o=1;o<oproducts.length;o++){
      this.total+=oproducts[o].price;
      console.log(this.total);
     }
     oproducts=oproducts.splice(0,1);
     this.itemService.total=this.total;
     this.router.navigateByUrl('home/customer/order/bill');
  }
 
 
  
}
