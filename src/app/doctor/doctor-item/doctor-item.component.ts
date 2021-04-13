import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-item',
  templateUrl: './doctor-item.component.html',
  styleUrls: ['./doctor-item.component.scss']
})
export class DoctorItemComponent implements OnInit {
  @Input() doctor : any

  constructor() { }

  ngOnInit(): void {
  }

}
