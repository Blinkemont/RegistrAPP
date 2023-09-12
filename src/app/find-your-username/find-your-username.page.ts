import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-find-your-username',
  templateUrl: './find-your-username.page.html',
  styleUrls: ['./find-your-username.page.scss'],
})
export class FindYourUsernamePage implements OnInit {

  constructor(private router: Router) { }

  backLogin(){
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
