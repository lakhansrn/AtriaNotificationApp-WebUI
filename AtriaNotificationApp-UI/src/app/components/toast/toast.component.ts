import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastService } from '../../_services';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  constructor(private messageService: MessageService,
    private toastService: ToastService) { }

  ngOnInit() {
    this.toastService.messageToast$.subscribe(msg => {
      this.addSingle(msg);
    });
  }

  addSingle(msg) {
    this.messageService.add(msg);
  }

  clear() {
    this.messageService.clear();
  }

}
