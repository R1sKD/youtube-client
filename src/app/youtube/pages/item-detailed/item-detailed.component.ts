import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getYoutubeVideoById } from 'src/app/redux/selectors/youtube.selector';
import { YoutubeState } from 'src/app/redux/state.model';
import { Video } from '../../models/search-item.model';

@Component({
  selector: 'app-item-detailed',
  templateUrl: './item-detailed.component.html',
  styleUrls: ['./item-detailed.component.scss'],
})
export class ItemDetailedComponent implements OnInit {
  item: Video | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private store: Store<YoutubeState>
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.store
      .select(getYoutubeVideoById(id))
      .subscribe((el) => (this.item = el));
  }
}
