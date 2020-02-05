import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Model/item';
import { ItemService } from 'src/app/service/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: Array<Item> = [];
  constructor(private itemservice : ItemService,private router:Router) { }

  ngOnInit() {
    console.log('hello');
      this.itemservice.getItems().subscribe(
      (data) => {
        console.log('data',data);
        this.items = data['items'];
        console.log(this.items);
       }
    );
    
  }

}
