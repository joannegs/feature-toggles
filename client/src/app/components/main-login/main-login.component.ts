import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './../../shared/services/users.service';
import { User } from './../../../../../server/src/database/entities/User.entity';

interface UserId {
  id: string; 
}
@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.scss']
})
export class MainLoginComponent {

  email: any = '';
  password: any = '';

  constructor(private router: Router, private usersService: UsersService) {}

  login() {
    console.log(this.email, this.password)
    this.usersService.login(this.email, this.password).subscribe(data => {
      if(data) {
        console.log(data)
        localStorage.setItem('logged_user_id', String((data as UserId).id));
        this.router.navigate(['/home']);
      } else console.log("Login inválido"); 
    });
  }
}
