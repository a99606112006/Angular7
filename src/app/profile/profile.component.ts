import { Component, OnInit } from '@angular/core';
import { Profile } from '../shared/Profile.model';
import { ProfileService } from '../shared/profile.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: ProfileService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {

      Id : 0,
      Q  :'',
      Ca :'',
      A1 :'',
      A2 :'',
      A3 :'',
      ImageName :'',
      User_Id :''
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.Id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postProfile().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putProfile().subscribe(
      res => {
        this.resetForm(form);        
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
