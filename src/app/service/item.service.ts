import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Item } from '../Model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  urlApi='http://localhost:8080/api/items';
  constructor(private http: HttpClient) { }


  addItem(i): Observable<any> {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    let options = {
      headers: headers
    };
    console.log('******in add Item********' + JSON.stringify(i));
    return this.http.post(this.urlApi, JSON.stringify(i), options);
  }
  getItems(): Observable<any> {
    console.log('******************************************test service*******************************');

    return this.http.get<Item>(this.urlApi);
  }

  getItemByID(id): Observable<any> {
    return this.http.get<Item>(this.urlApi + '/' + id +'/path');
  }

  editItem(id, i: Item): Observable<any> {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    let options = {
      headers: headers
    };
    console.log('in edit function');
    return this.http.patch(this.urlApi +'/'+id, JSON.stringify(i), options);
  }

  deleteItem(id:string){
    console.log('delete book ',id);
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    let options = {
      headers: headers
    }
    return this.http.delete(this.urlApi+'/'+id,options).subscribe(
      result => location.reload() ,
      err => console.error(err)
      
    );
  }
}
