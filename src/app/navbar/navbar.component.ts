import { Component } from '@angular/core';
import { MdbModalService, MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [MdbModalService],
  standalone: true,
})
export class NavbarComponent {
  constructor(private modalService: MdbModalService, private router: Router) {}

  openLoginModal() {
    this.modalService.open(LoginModalComponent);
    // this.modalRef = this.modalService.open(LoginModalComponent);
  }
  funcFdb(event: Event) {
    event.preventDefault();

    this.router.navigate(['/feedback']);
  }
  funcHome(event: Event) {
    event.preventDefault();

    this.router.navigate(['/home']);
  }
}
