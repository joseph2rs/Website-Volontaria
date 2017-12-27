import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthenticateService) {
  }

  ngOnInit() {
  }

  isConnected(): boolean {
    return this.authService.isConnected();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

}
