import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BoardService } from '../services/board.service';
import { Board } from '../../model/board.model';
import { LoaderService } from '../../_services';

@Component({
  selector: 'app-board-carousel',
  templateUrl: './board-carousel.component.html',
  styleUrls: ['./board-carousel.component.css']
})
export class BoardCarouselComponent implements OnInit {

  boards: Board[];
  @Output() showcontent = new EventEmitter<string>();

  constructor(private boardService: BoardService,
    private loaderService: LoaderService) { }

  ngOnInit() {
    this.getBoards();
    // Mock Events
    // this.getMockEvents();
  }

  getBoards() {
    this.loaderService.setLoader();
    this.boardService.getBoards().subscribe(boards => {
      this.loaderService.clearLoader();
      // sort boards
      this.boards = boards.sort(this.sortByDate);
      // sort announcements
      this.boards.map(board => {
        board.announcements.sort(this.sortByDate);
        board.announcements.map(announcement => {
          if (announcement.img.length > 0) {
            const img = announcement.img.split('upload/');
            announcement.img = img[0] + 'upload/q_auto/' + img[1];
          }
        });
      });
    });
  }

  sortByDate(a: any, b: any) {
    const aDate = a.dateModifiedOn || a.dateCreatedOn;
    const bDate = b.dateModifiedOn || b.dateCreatedOn;
    return new Date(bDate).getTime() - new Date(aDate).getTime();
  }

  // getMockEvents() {
  //   this.boardService.getMockEvents().subscribe(boards => {
  //     this.boards = boards;
  //     console.log(this.boards);
  //   });
  // }

  showContent(id: string) {
    this.showcontent.emit(id);
  }
}
