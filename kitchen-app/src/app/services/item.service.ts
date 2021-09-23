import { Injectable } from '@angular/core';
import { Item } from '../model/item.model';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  total:number=0;
  onUpdate(item: Item) {
    let olditem=this.items.find(x => x.id === item.id) as Item;
    olditem.name=item.name;
    olditem.price=item.price;
  }
  products:Item[]=[{
    id: 0,
    name: "",
    
    price:0
   
  
    }];
  items:Item[]=[
    {
    id: 1,
    name: "Apple",
    price:50
  },
    {
    id: 2,
    name: "Banana",
    price:5
    },
    {
    id: 3,
    name: "Oranges",
    price:50


    },
    {
    id: 4,
    name: "Watermelon",
    price:5,
    },
    {
    id: 5,
    name: "Chickoo",
    price:50

    },
    {
    id: 6,
    name: "Guava",
    price:5
       }
  ];
  constructor() { }

  onGet(){
    return this.items;
  }
  onAdd(item:Item){
    this.items.push(item);
  }
  onDelete(id:Number){
    try{
    let item=this.items.find(x => x.id === id) as Item;
    let index=this.items.indexOf(item,0);
    this.items.splice(index,1);}
    catch(error){
      console.log(error+"id doesn't exist");
    }

  }
  onOrder(item:Item){
    let olditem=this.items.find(x => x.id === item.id) as Item;
    olditem.name=item.name;
    olditem.price=item.price;
    this.products.push(olditem);
  }
  onGetItem(id: Number){
    return this.items.find(x => x.id === id);
  }
}
