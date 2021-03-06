import { Component, Input, OnInit } from '@angular/core';
import { CustomItem } from 'src/app/youtube/models/custom-item.model';
import { Video } from 'src/app/youtube/models/search-item.model';
import { DataService } from 'src/app/youtube/services/data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  filterSearchValue: string = '';

  @Input() items: Video[] = [];

  @Input() customItems: CustomItem[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.filterSearchValue$.subscribe((value) => {
      this.filterSearchValue = value;
    });
  }
}
