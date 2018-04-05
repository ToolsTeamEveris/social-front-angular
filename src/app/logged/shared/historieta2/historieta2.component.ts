import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historieta2',
  templateUrl: './historieta2.component.html',
  styleUrls: ['./historieta2.component.css']
})
export class Historieta2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/logged/historietas']);
    }, 0);   
  }
}
