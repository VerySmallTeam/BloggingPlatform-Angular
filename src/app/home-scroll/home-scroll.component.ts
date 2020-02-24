import { Component } from '@angular/core';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Post } from '../models/post';
import { LiveScrollingService } from '../services/live-scrolling.service';

@Component({
  selector: 'app-home-scroll',
  templateUrl: './home-scroll.component.html',
  styleUrls: ['./home-scroll.component.css']
})
export class HomeScrollComponent {

  dataSource: PostsDataSource;

  constructor(private liveScrollingService: LiveScrollingService) {
    this.dataSource = new PostsDataSource(liveScrollingService);
  }

}

export class PostsDataSource extends DataSource<Post | undefined> {
  private cachedPosts = Array.from<Post>({ length: 0 });
  private dataStream = new BehaviorSubject<(Post | undefined)[]>(this.cachedPosts);
  private subscription = new Subscription();

  private partSize = 10;
  private lastPart = 0;

  constructor(private factService: LiveScrollingService) {
    super();
    this._fetchPosts();
  }

  connect(collectionViewer: CollectionViewer): Observable<(Post | undefined)[] | ReadonlyArray<Post | undefined>> {
    this.subscription.add(collectionViewer.viewChange.subscribe(range => {

      const currentPart = this._getPartForIndex(range.end);

      if (currentPart && range) {
        console.log(currentPart, this.lastPart);
      }

      if (currentPart > this.lastPart) {
        this.lastPart = currentPart;
        this._fetchPosts();
      }
    }));
    return this.dataStream;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.subscription.unsubscribe();
  }

  private _fetchPosts(): void {
      this.factService.getPosts().subscribe(res => {
        this.cachedPosts = this.cachedPosts.concat(res);
        this.dataStream.next(this.cachedPosts);
      });
  }

  private _getPartForIndex(i: number): number {
    return Math.floor(i / this.partSize);
  }

}
