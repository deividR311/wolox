import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public technologies: any = [];
  public filterTechnologies: string = '';

  constructor(
    readonly listService: ListService
  ) { }

  ngOnInit(): void {
    this.handleTechnologiesData()
  }

  public handleTechnologiesData() {
    this.listService.getTechnologyList().subscribe(
      (res: any) => { this.technologies = res},
      (err: any) => { throw err }
    )
  }

}
