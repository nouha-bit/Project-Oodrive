import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from 'src/app/service/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  marked = false;
  constructor(private itemservice: ItemService, private router:Router) { }

  ngOnInit() {
  }
  toggleVisibility(e){
    return this.marked= e.target.checked;
  }
  addItem(f: NgForm) {
    console.log('checkbox',this.marked);
    
    let i = {name:f.value.name, folder:this.marked}
    this.itemservice.addItem(i).subscribe(
      (data)=>{
        console.log(data);
        this.router.navigate(['/items']);
      }
    );
  }
}
