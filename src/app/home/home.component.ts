import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LiveScrollingService } from '../services/live-scrolling.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private liveScrollingService: LiveScrollingService) { }

  ngOnInit() {
  }

}
