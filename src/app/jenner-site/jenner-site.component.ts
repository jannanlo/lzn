import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jenner-site',
  templateUrl: './jenner-site.component.html',
  styleUrls: ['./jenner-site.component.scss']
})
export class JennerSiteComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
	console.log('sssssssssss');
  }

}
