import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Board } from '../../model/board.model';
import { BoardService, LoaderService } from '../../_services';
import { Announcement } from '../../model/announcement.model';
import { Content } from '../../model/content.model';
import { BoardAnnouncementID } from '../../model/board-announcement-id.model';

@Component({
  selector: 'app-content-creation',
  templateUrl: './content-creation.component.html',
  styleUrls: ['./content-creation.component.css'],
})
export class ContentCreationComponent implements OnInit {

  all_boards: Board[];
  board: Board;
  board_suggestions: Board[];
  show_board_box = true;

  all_announcement: Announcement[];
  announcement: Announcement;
  announcement_suggestions: Announcement[];

  all_content: Content[];
  content: Content;
  content_suggestions: Content[];

  // holds board and announcement ids
  board_announcement_id: BoardAnnouncementID = {
    board_id: '',
    announcement_id: '',
    content_id: ''
  };

  showContentPanel = false;
  editable = false;

  @Output() open_content_panel = new EventEmitter<Object>();

  constructor(private boardService: BoardService,
    private loaderService: LoaderService) { }

  ngOnInit() {
    this.getBoards();
  }

  getBoards() {
    this.loaderService.setLoader();
    this.boardService.getBoards().subscribe((boards) => {
      this.loaderService.clearLoader();
      this.all_boards = boards;
      // console.log(this.all_boards);
      this.board_suggestions = this.all_boards;
    });
  }

  searchBoard(e) {
    if (e.query === '') {
      this.board_suggestions = this.all_boards;
    }

    this.board_suggestions = this.all_boards
      .filter(val => val.board_name.toLowerCase().indexOf(e.query.toLowerCase()) > -1);

  }

  chooseBoard() {
    this.show_board_box = false;
    this.announcement = null;
    this.all_announcement = this.board.announcements;
    this.board_announcement_id.board_id = this.board.id;
    this.announcement_suggestions = this.all_announcement;
  }

  searchAnnouncement(e) {
    if (e.query === '') {
      this.announcement_suggestions = this.all_announcement;
    }

    this.announcement_suggestions = this.filterTitle(this.all_announcement, e.query);
  }

  chooseAnnouncement() {
    this.board_announcement_id.announcement_id = this.announcement.id;
    this.content = null;
    this.editContent();
  }

  addContent() {
    this.showContentPanel = true;
    this.editable = false;
    this.content = null;
  }

  editContent() {
    this.loaderService.setLoader();
    this.boardService.getContents(this.board_announcement_id.announcement_id)
    .subscribe(res => {
      this.loaderService.clearLoader();
      this.all_content = res;
      this.content_suggestions = this.all_content;
    });
  }

  searchContent(e) {
    if (e.query === '') {
      this.content_suggestions = this.all_content;
    }

    this.content_suggestions = this.filterTitle(this.all_content, e.query);
  }

  chooseContent() {
    this.board_announcement_id.content_id = this.content.id;
    this.editable = true;
    this.showContentPanel = true;
  }

  filterTitle(arr, title) {
    return arr.filter(val => val.title.toLowerCase().indexOf(title.toLowerCase()) > -1);
  }

}
