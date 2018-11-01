import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName: string;
  public password: string;
  constructor(
    private  _router: Router
  ) { }

  ngOnInit() {
  }

  public login() {
    if (this.userName === 'user' && this.password === 'user') {
      this._router.navigate(['/dashboard/user']);
      alert('User Logged In');
      return;
    }
    if (this.userName === 'admin' && this.password === 'admin') {
      this._router.navigate(['/dashboard/admin']);
      alert('Admin Logged In');
      return;
    }
    alert('Wrong Username Password');
  }

  public clear() {
    this.userName = undefined;
    this.password = undefined;
  }
}
