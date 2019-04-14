import { Component, OnInit } from '@angular/core';
import { Board, Announcement } from '../../model';
import { BoardService, ImageUploadService, LoaderService, ToastService } from '../../_services';
import { BoardAnnouncementCreationService } from '../service/board-announcement-creation.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-boards-annoucements-creation',
  templateUrl: './boards-annoucements-creation.component.html',
  styleUrls: ['./boards-annoucements-creation.component.css'],
  providers: [ConfirmationService]
})
export class BoardsAnnoucementsCreationComponent implements OnInit {

  edit: boolean;
  board_panel = false;
  imgFile = null;

  all_boards: Board[];
  board: Board;
  boardData: Board = {
    board_banner: '',
    board_name: '',
    announcements: [],
    description: '',
    showAsBanner: false,
    id: '00000000-0000-0000-0000-000000000000',
    dateCreatedOn: new Date(),
    dateModifiedOn: new Date(),
    isFixed: false,
    order: null,
  };
  board_suggestions: Board[];
  order_limit = 10;

  all_announcement: Announcement[];


  constructor(
    private boardService: BoardService,
    private imageUploadService: ImageUploadService,
    private loaderService: LoaderService,
    private toastService: ToastService,
    private boardAnnouncementService: BoardAnnouncementCreationService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.getBoards();
  }

  orderArray(n: number) {
    return Array(n);
  }

  boardSubmit() {
    this.loaderService.setLoader();
    const upload = (uploadContent) => {
      let img_path = null;
      this.imageUploadService.uploadImage(this.imgFile)
        .subscribe(res => {
          if (res['secure_url']) {
            img_path = res['secure_url'];
            this.boardData.board_banner = img_path;
            uploadContent();
          } else {
            this.toastService.setToastMsg({ key: 'alert', severity: 'error', summary: 'Error', detail: 'Error while uploading image' });
            this.loaderService.clearLoader();
          }
        });
    };
    if (this.edit) {
      if (this.imgFile) {
        upload(this.updateBoard.bind(this));
      } else {
        this.updateBoard();
      }
    } else {
      if (this.imgFile) {
        upload(this.uploadBoard.bind(this));
      } else {
        this.uploadBoard();
      }
    }
  }

  getBoards(callback?) {
    this.loaderService.setLoader();
    this.boardService.getBoards().subscribe((boards) => {
      this.all_boards = boards;
      this.loaderService.clearLoader();
      console.log(this.all_boards);
      this.board_suggestions = this.all_boards;
      if (callback) {
        callback();
      }
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
    this.boardAnnouncementService.setBoardID(this.board.id);
    this.all_announcement = Object.assign([], this.board.announcements);
    this.edit = true;
    this.imgFile = null;
    this.boardAnnouncementService.setAnnouncements(this.all_announcement);
    Object.assign(this.boardData, this.board);
  }

  onUpdatedAnnouncements(board_id) {
    const updateAnnouncementContents = (id) => {
      this.all_announcement = this.all_boards
        .filter(val => val.id === id)
        .map(board => board.announcements)[0];
      this.boardAnnouncementService.setAnnouncements(this.all_announcement);
    };

    this.getBoards(() => {
      updateAnnouncementContents(board_id);
    });
  }

  addBoard() {
    this.clearInput();
    this.board = null;
    this.edit = false;
    this.board_panel = true;
  }

  closePanel() {
    this.board_panel = false;
    this.clearInput();
  }

  editBoard() {
    this.edit = true;
    Object.assign(this.boardData, this.board);
    this.board_panel = true;
  }

  setImage(e) {
    this.imgFile = e.target.files[0];
    console.log(this.imgFile);
  }

  uploadBoard() {
    this.boardService.postBoard(this.boardData)
      .subscribe(res => {
        this.toastService.setToastMsg({ key: 'alert', severity: 'success', summary: 'Success', detail: 'Board Uploaded' });
        this.loaderService.clearLoader();
        this.getBoards();
      });
  }

  deleteBoard() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete?',
      accept: () => {
        this.board = null;
        // Actual logic to perform a confirmation
        this.boardService.deleteBoard(this.boardData.id)
          .subscribe(res => {
            this.loaderService.setLoader();
            this.edit = false;
            this.loaderService.clearLoader();
            this.getBoards();
          });
      }
    });
  }

  updateBoard() {
    this.boardService.updateBoard(this.boardData)
      .subscribe(res => {
        this.toastService.setToastMsg({ key: 'alert', severity: 'success', summary: 'Updated', detail: 'Board Updated' });
        this.loaderService.clearLoader();
        this.getBoards();
      });
  }

  clearInput() {
    this.boardData.board_banner = '';
    this.boardData.board_name = '';
    this.boardData.announcements = [];
    this.boardData.description = '';
    this.boardData.showAsBanner = false;
    this.boardData.id = '00000000-0000-0000-0000-000000000000';
    this.boardData.isFixed = false;
    this.boardData.order = null;
    this.imgFile = null;
  }

}
