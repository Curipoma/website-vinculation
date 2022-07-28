import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attach-documents',
  templateUrl: './attach-documents.component.html',
  styleUrls: ['./attach-documents.component.scss'],
})
export class AttachDocumentsComponent implements OnInit {
  uploadedFiles: any[] = [];
  constructor() {}

  ngOnInit(): void {}

  onUpload(e: any) {}
}
