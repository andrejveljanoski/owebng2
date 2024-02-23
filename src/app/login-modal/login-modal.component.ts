import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
  standalone: true,
})
export class LoginModalComponent {
  isOpen = false;

  constructor(
    private router: Router,
    private modalRef: MdbModalRef<LoginModalComponent>
  ) {} // <-- Inject MdbModalRef here

  close(event: Event) {
    event.preventDefault();
    this.modalRef.close();
  }
  onSubmit(event: Event) {
    event.preventDefault();
    this.modalRef.close(); // <-- Use the injected MdbModalRef to close the modal
    this.router.navigate(['/home']);
  }
}
