import {Component, OnInit} from '@angular/core';
import {HistoryService} from '../../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: any[] = [];
  search = '';

  constructor(private historyService: HistoryService) {
  }

  ngOnInit(): void {
    const historyData = this.historyService.getHistoryData();
    this.history = historyData;
  }

}
