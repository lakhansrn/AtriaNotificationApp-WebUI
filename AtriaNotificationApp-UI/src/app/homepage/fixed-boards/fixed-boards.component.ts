import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Board } from '../../model/board.model';
import { LoaderService, BoardService } from '../../_services';

@Component({
  selector: 'app-fixed-boards',
  templateUrl: './fixed-boards.component.html',
  styleUrls: ['./fixed-boards.component.css']
})
export class FixedBoardsComponent implements OnInit {

  boards: Board[];
  @Output() showcontent = new EventEmitter<string>();

  constructor(private boardService: BoardService,
    private loaderService: LoaderService) { }

  ngOnInit() {
    this.getBoards();
  }

  getBoards() {
    this.loaderService.setLoader();
    this.boardService.getFixedBoards().subscribe(boards => {
      this.loaderService.clearLoader();

      // sort announcements
      this.boards = boards;
      this.boards.map(board => {
        board.announcements.map(announcement => {
          if (announcement.img.length > 0) {
            const img = announcement.img.split('upload/');
            announcement.img = img[0] + 'upload/q_auto/' + img[1];
          }
        });
      });
    });
  }

  showContent(id: string) {
    this.showcontent.emit(id);
  }

}
