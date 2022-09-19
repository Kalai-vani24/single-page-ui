import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }
showDiv = {
  Android : false,
  Web : false,
  next : false
}
  ngOnInit(): void {
  }

}
