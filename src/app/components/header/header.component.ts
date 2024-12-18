import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;

  constructor(private router: Router) {
   
  }
  redirectToHome() {
    this.router.navigate(['/home']);
  }


  redirectToLogIn() {
    this.router.navigate(['/login']);
  }

  redirectToSignUp() {
    this.router.navigate(['/signup']);
  }
  redirectToMeetUS()
  {
    this.router.navigate(['/meettheteam']);
  }
  redirectToRobotsInAction()
  {
    this.router.navigate(['/robotsinaction']);
  }

  signOut() {
    
    this.router.navigate(['/login']);
  }
}
