import { Component, OnInit } from '@angular/core';
import { ComputeHistoryService } from '../providers/compute-history.service'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  providers: [ComputeHistoryService],
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  data: {}
  page: 1

  constructor(private historyService: ComputeHistoryService) { }

  next() {
    this.page++;

    this.historyService.getComputeHistories(this.page).subscribe(response => {
      this.data = response;
    });
  }

  prev() {
    if (this.page > 0) {
      this.page--;

      this.historyService.getComputeHistories(this.page).subscribe(response => {
        this.data = response;
      });
    }
  }


  ngOnInit() {
    this.page = 1
    this.data = {};

    this.historyService.getComputeHistories(this.page).subscribe(response => {
      this.data = response;
    });
  }
}
