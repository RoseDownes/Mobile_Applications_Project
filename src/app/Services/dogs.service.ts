import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

 constructor(private httpClient:HttpClient) { }

  GetDogData():Observable<any>{    
    return this.httpClient.get('https://jsonblob.com/api/jsonBlob/970260458603036672');
  }
}
