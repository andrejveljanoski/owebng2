import { Component } from '@angular/core';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [MdbModalService],
  standalone: true,
})
export class NavbarComponent {
  constructor(private modalService: MdbModalService) {}

  openLoginModal() {
    this.modalService.open(LoginModalComponent);
  }
}
