import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProServiceService 
{
  constructor(private httpClient:HttpClient) { }
  updateUser(data)
  {
        const HttpUploadOptions = {
       headers: new HttpHeaders({
      //   'Authorization': 'Bearer ' + this.jwtService.getToken()
       }),
     }
 
    //  this.httpClient= new HttpClient(this.httpBackend);
     //      let url=environment.user_url+'api/user/updateUser';
     let url="http://localhost:8910/updateUser";
         return this.httpClient.put(url,data);
  }
 
}
