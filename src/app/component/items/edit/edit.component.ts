import { Component, OnInit, NgZone } from '@angular/core';
import { Item } from 'src/app/Model/item';
import { ItemService } from 'src/app/service/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id : string;
  it : any;
  constructor(
    private itemserrvice: ItemService,
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private _ngZone: NgZone) { }

    ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log('id===',this.id)
   this.itemserrvice.getItemByID(this.id).subscribe(
      (data)=>{
        console.log('data',data);
         this.it = data['items'];
         console.log('it',this.it[0].name)
      }
    );
  }

  editItem(f: NgForm){
    
    let i = new Item(f.value.id,f.value.name,f.value.creation,f.value.modification);
    this.itemserrvice.editItem(this.id,i).subscribe(
      (data)=>{
        console.log(data)
        this.router.navigate(['/items'])
      }
    );
  }

}
