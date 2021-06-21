import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefit-item',
  templateUrl: './benefit-item.component.html',
  styleUrls: ['./benefit-item.component.scss']
})
export class BenefitItemComponent implements OnInit {
  @Input() iconUrl: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
