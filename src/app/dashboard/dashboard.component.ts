import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DocumentsService} from '../shared/documents.service';
import {Document} from '../shared/document';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  document: Document;

  private documents: Document[];
  private selectCategory = [
    {swipe: 'left', category: 'outgoing_invoice'},
    {swipe: 'right', category: 'incoming_invoice'},
    {swipe: 'up', category: 'cash_register'},
    {swipe: 'down', category: 'other'},
  ];

  constructor(private router: Router, private service: DocumentsService) {
  }

  swipe(action) {
    console.log('swipe it baby!' + action);
    const [category] = this.selectCategory
      .filter(d => 'swipe' + d.swipe === action)
      .map(d => d.category);
    this.router.navigate(['/categorize', category, this.document.id]);
  }

  ngOnInit() {
    this.documents = this.service
      .getAllDocuments()
      .filter(d => !d.category);
    this.document = this.documents[0];
  }

  hasMoreDocuments() {
    return this.documents.length > 0;
  }
}
