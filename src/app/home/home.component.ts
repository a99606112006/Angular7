import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../shared/Profile.model';
import { ProfileService } from '../shared/profile.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
/*
export class HomeComponent implements OnInit {
  constructor(private service: ProfileService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pf: Profile) {
    this.service.formData = Object.assign({}, pf);
  }

  randomMath() { return Math.floor(Math.random() * 4); }
}
*/



//generate user info
export class HomeComponent implements OnInit {
  userDetails;

  constructor(private router: Router, private service: UserService,private service2: ProfileService) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
    this.service2.refreshList();
  }

  populateForm(pf: Profile) {
    this.service2.formData = Object.assign({}, pf);
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}
