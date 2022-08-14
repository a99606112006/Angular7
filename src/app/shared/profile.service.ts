import { Injectable } from '@angular/core';
import { Profile } from './Profile.model';
import { HttpClient
 } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  formData: Profile = {

  Id :null,
  Q  :null,
  Ca :null,
  A1 :null,
  A2 :null,
  A3 :null,
  ImageName :null,
  User_Id :null
  };
  readonly rootURL = 'http://localhost:54277/api';
  list : Profile[];

  constructor(private http: HttpClient) { }


  postProfile() {
    return this.http.post(this.rootURL + '/Profile', this.formData);
  }
  putProfile() {
    return this.http.put(this.rootURL + '/Profile/'+ this.formData.Id, this.formData);
  }
  deleteProfile(id) {
    return this.http.delete(this.rootURL + '/Profile/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/Profile')
    .toPromise()
    .then(res => this.list = res as Profile[]);
  }




}
