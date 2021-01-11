import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  faChevronLeft = faChevronLeft;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  isIframe(){
    return window.self === window.top
  }
  goHome(){
    this.router.navigateByUrl('/');
  }
}
