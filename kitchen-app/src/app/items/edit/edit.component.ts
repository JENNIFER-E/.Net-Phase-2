import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/model/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id:number;
header:string;
item:Item=
  {
  id: 0,
  name: "",
  price:0
  
  };
  constructor(private router:Router,private route:ActivatedRoute, private itemService:ItemService) { }

  ngOnInit(): void {
   this.id= Number(this.route.snapshot.paramMap.get('id'));
   this.header=this.id===0?'Add Item':'Edit Item';
   if(this.id!=0){
     this.item=this.itemService.onGetItem(this.id) as Item;
   }
  }
  onSubmit(form:NgForm){
    let item:Item={
      id:form.value.id,
      name:form.value.name,
      price:form.value.price
      
    }
    if(this.id===0) this.itemService.onAdd(item);
    else this.itemService.onUpdate(item);
    //goes to homepage
    this.router.navigateByUrl('home/admin/item');

  }

}
