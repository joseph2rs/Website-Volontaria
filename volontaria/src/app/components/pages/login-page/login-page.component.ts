import { Component } from '@angular/core';
import { AuthenticateService } from '../../../services/authenticate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'login-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.scss']
})
export class LoginPageComponent {

  username: string;
  password: string;

  constructor(private authService: AuthenticateService, private router: Router) {
  }

  login() {
    this.authService.authenticate(this.username, this.password).subscribe(data => {
      this.router.navigate(['/']);
    });
  }
}
