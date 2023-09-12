import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user:string | null = "";
  constructor(private route:ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.user = params.get('data');
    });
    console.log(this.user)
  }
  
}
