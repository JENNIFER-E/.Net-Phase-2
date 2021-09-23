import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.onGet();
  }
  onDelete(id:number){
    this.itemService.onDelete(id);
  }

}
