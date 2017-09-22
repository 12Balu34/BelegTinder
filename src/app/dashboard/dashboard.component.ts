import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

   private selectCategory = [
    {swipe: 'left', category: 'outgoing_invoice'},
    {swipe: 'right', category: 'incoming_invoice'},
    {swipe: 'up', category: 'cash_register'},
    {swipe: 'down', category: 'other'},
  ];

  constructor(private router: Router) {
  }

  swipe(action) {
    console.log('swipe it baby!' + action);
    const [category] = this.selectCategory
      .filter(d => 'swipe' + d.swipe === action)
      .map(d => d.category);
    this.router.navigate(['/categorize', category]);
  }

  ngOnInit() {
  }

}
